// Local Imports
import donationListInsert from "~/server/queries/donation-list.insert";

interface Body {
  amount: string;
}

export default defineEventHandler(async (event): Promise<string> => {
  try {
    const body = await readBody<Body>(event);
    const db = getDb();
    await dbRunAwait(db, donationListInsert, [body.amount]);
    await dbClose(db);
    return "Success";
  } catch (e: unknown) {
    throw createError({
      statusCode: 400,
      statusMessage: (e as Error)?.message,
    });
  }
});
