// Third Party Imports
import { createClient } from "@vercel/postgres";

interface Body {
  amount: string;
}

export default defineEventHandler(async (event): Promise<string> => {
  try {
    const body = await readBody<Body>(event);
    const client = createClient();
    await client.connect();
    await donationListInsert(client, [Number(body.amount)]);
    await client.end();
    return "Success";
  } catch (e: unknown) {
    throw createError({
      statusCode: 400,
      statusMessage: (e as Error)?.message,
    });
  }
});
