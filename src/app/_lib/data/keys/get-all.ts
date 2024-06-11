"use server";

import { db } from "@/db/client";
import { eq } from "drizzle-orm";
import { keys } from "@/db/schema";

export async function getAllApiKeys(userId: string) {
  return db.query.keys.findMany({
    where: eq(keys.user_id, userId),
  });
}
