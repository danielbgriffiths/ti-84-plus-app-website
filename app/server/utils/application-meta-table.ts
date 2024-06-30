// Third Party Imports
import { VercelClient } from "@vercel/postgres";

export default async (client: VercelClient): Promise<void> => {
  try {
    await client.sql`CREATE TABLE IF NOT EXISTS application_meta (
      id SERIAL PRIMARY KEY,
      name VARCHAR NOT NULL UNIQUE,
      group_name VARCHAR NOT NULL,
      views INTEGER NOT NULL DEFAULT 0,
      downloads INTEGER NOT NULL DEFAULT 0,
      ratings_count INTEGER NOT NULL DEFAULT 0,
      ratings_sum INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`;
  } catch (e) {
    console.error("application-meta.table: error:", e);
    throw e;
  }
};
