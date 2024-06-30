// Third Party Imports
import { VercelClient } from "@vercel/postgres";

export default async (client: VercelClient): Promise<void> => {
  try {
    await client.sql`CREATE TABLE IF NOT EXISTS donation_list (
      id SERIAL PRIMARY KEY,
      amount INTEGER NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`;
  } catch (e) {
    console.error("application-meta.table: error:", e);
    throw e;
  }
};
