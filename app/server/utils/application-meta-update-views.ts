// Third Party Imports
import { VercelClient } from "@vercel/postgres";

export default async (
  client: VercelClient,
  args: [number, string],
): Promise<void> => {
  try {
    const queryResult =
      await client.sql`UPDATE application_meta SET views = ${args[0]}, updated_at = CURRENT_TIMESTAMP WHERE name = ${args[1]};`;

    console.log(
      "application-meta.update-views: queryResult:",
      queryResult.rows[0],
    );
  } catch (e) {
    console.error("application-meta.update-views: error:", e);
    throw e;
  }
};
