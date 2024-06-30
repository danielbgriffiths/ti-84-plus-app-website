// Third Party Imports
import { VercelClient } from "@vercel/postgres";

export default async (client: VercelClient, args: [number]): Promise<void> => {
  try {
    await client.sql`INSERT INTO donation_list (
        amount
    ) VALUES (
        ${args[0]}
    );`;
  } catch (e) {
    console.error("donation-list.insert: error:", e);
    throw e;
  }
};
