// Third Party Imports
import { VercelClient } from "@vercel/postgres";

export default async (client: VercelClient, args: [string]): Promise<void> => {
  try {
    await client.sql`INSERT INTO email_list (
        email
    ) VALUES (
        ${args[0]}
    );`;
  } catch (e) {
    console.error("email-list.insert: error:", e);
    throw e;
  }
};
