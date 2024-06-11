import { loadEnvConfig } from "@next/env";
import { sql } from "@vercel/postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "@/db/client";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

async function runMigrations() {
  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: "./drizzle" });

  // Don't forget to close the connection, otherwise the script will hang
  await sql.end();
}

runMigrations();
