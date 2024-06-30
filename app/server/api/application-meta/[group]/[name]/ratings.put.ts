// Third Party Imports
import { createClient } from "@vercel/postgres";

// Local Imports
import { ApplicationMeta, ApplicationMetaApi } from "~/types";

interface Body {
  rating: number;
}

export default defineEventHandler(async (event): Promise<ApplicationMeta> => {
  try {
    const name = getRouterParam(event, "name");

    const body = await readBody<Body>(event);

    if (!body.rating || !name) {
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

    await applicationMetaUpdateRatings(client, [
      row.ratings_count + 1,
      row.ratings_sum + body.rating,
      name,
    ]);

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
