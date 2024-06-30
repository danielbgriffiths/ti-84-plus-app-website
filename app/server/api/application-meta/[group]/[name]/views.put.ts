// Third Party Imports
import { createClient } from "@vercel/postgres";

// Local Imports
import { ApplicationMeta, ApplicationMetaApi } from "~/types";

export default defineEventHandler(async (event): Promise<ApplicationMeta> => {
  try {
    const name = getRouterParam(event, "name");

    if (!name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request: object is not valid.",
      });
    }

    const client = createClient();
    await client.connect();

    const row = await applicationMetaGet(client, [name]);

    if (!row) {
      await client.end();
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found: object not found.",
      });
    }

    await applicationMetaUpdateViews(client, [row.views + 1, name]);

    const newRow = await applicationMetaGet(client, [name]);

    await client.end();

    return snakeToCamel<ApplicationMetaApi, ApplicationMeta>({
      ...newRow,
      created_at: newRow.created_at.toISOString() as unknown as Date,
      updated_at: newRow.updated_at.toISOString() as unknown as Date,
    });
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: (e as Error)?.message,
    });
  }
});
