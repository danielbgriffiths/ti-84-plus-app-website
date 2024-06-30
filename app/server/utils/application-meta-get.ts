// Third Party Imports
import { VercelClient } from "@vercel/postgres";

// Local Imports
import { ApplicationMetaApi } from "~/types";

export default async (
  client: VercelClient,
  args: [string],
): Promise<ApplicationMetaApi> => {
  try {
    const queryResult =
      await client.sql<ApplicationMetaApi>`SELECT * FROM application_meta WHERE name = ${args[0]};`;

    console.log("application-meta.get: queryResult:", queryResult.rows[0]);

    return queryResult.rows[0];
  } catch (e) {
    console.error("application-meta.get: error:", e);
    throw e;
  }
};
