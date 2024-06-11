import { createInsertSchema } from "drizzle-zod";
import { keys } from "@/db/schema";

export const insertApiKeySchema = createInsertSchema(keys).pick({ key: true });
