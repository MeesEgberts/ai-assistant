import { pgEnum, pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const api_keys = pgEnum("api_keys", ["open_ai"]);

export const keys = pgTable("keys", {
  id: uuid("id").primaryKey().defaultRandom(),
  user_id: text("user_id").notNull(),
  key: text("key").notNull(),
  type: api_keys("type").notNull().default("open_ai"),

  created_at: timestamp("created_at").notNull().defaultNow(),
});
