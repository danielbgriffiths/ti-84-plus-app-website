// Third Party Imports
import { VercelClient } from "@vercel/postgres";

export default async (
  client: VercelClient,
  args: [number, number, string],
): Promise<void> => {
  try {
    const queryResult =
      await client.sql`UPDATE application_meta SET ratings_count = ${args[0]}, ratings_sum = ${args[1]}, updated_at = CURRENT_TIMESTAMP WHERE name = ${args[2]};`;

    console.log(
      "application-meta.update-ratings: queryResult:",
      queryResult.rows[0],
    );
  } catch (e) {
    console.error("application-meta.update-ratings: error:", e);
    throw e;
  }
};
