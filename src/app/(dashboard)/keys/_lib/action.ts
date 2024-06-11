"use server";

import { parseWithZod } from "@conform-to/zod";
import { insertApiKeySchema } from "@/lib/validation/keys";
import { db } from "@/db/client";
import { keys } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { routes } from "@/app/_lib/routes";

export async function createApiKey(_: unknown, data: FormData) {
  const submission = parseWithZod(data, {
    schema: insertApiKeySchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { userId } = auth();

  if (!userId) {
    return submission.reply({ formErrors: ["Unauthorized"] });
  }

  try {
    await db.insert(keys).values({
      type: "open_ai",
      key: submission.value.key,
      user_id: userId,
    });
  } catch (e) {
    console.error(e);

    return submission.reply({
      formErrors: ["Something went wrong while adding a new API key"],
    });
  }

  revalidatePath(routes.keys);

  return submission.reply();
}
