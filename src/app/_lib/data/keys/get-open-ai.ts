"use server";

import { db } from "@/db/client";
import { and, eq } from "drizzle-orm";
import { keys } from "@/db/schema";

export async function getOpenAiApiKey(userId: string) {
  return db.query.keys.findFirst({
    where: and(eq(keys.user_id, userId), eq(keys.type, "open_ai")),
  });
}
