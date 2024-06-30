// Third Party Imports
import { createClient } from "@vercel/postgres";

export default defineNitroPlugin(async (): Promise<void> => {
  try {
    const client = createClient();
    await client.connect();
    await applicationMetaTable(client);
    await emailListTable(client);
    await donationListTable(client);
  } catch (e) {
    console.error("e: ", (e as Error)?.message);
  }
});
