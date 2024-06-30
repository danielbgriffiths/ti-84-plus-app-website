// Third Party Imports
import { VercelClient } from "@vercel/postgres";

// Local Imports
import { GroupName } from "~/types";

export default async (
  client: VercelClient,
  args: [string, GroupName],
): Promise<void> => {
  try {
    await client.sql`INSERT INTO application_meta (
        name, group_name, views, downloads, ratings_count, ratings_sum, created_at, updated_at
    ) VALUES (
        ${args[0]}, ${args[1]}, 0, 0, 0, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
    );`;
  } catch (e) {
    console.error("application-meta.insert: error:", e);
    throw e;
  }
};
