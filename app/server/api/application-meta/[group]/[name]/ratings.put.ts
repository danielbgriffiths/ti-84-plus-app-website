// Local Imports
import applicationMetaUpdateRatings from "~/server/queries/application-meta.update-ratings";
import applicationMetaGet from "~/server/queries/application-meta.get";
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

    const db = getDb();

    const row = await dbGetAwait<ApplicationMetaApi>(db, applicationMetaGet, [
      name,
    ]);

    if (!row) {
      throw createError({
        statusCode: 404,
        statusMessage: "Not Found: object not found.",
      });
    }

    await dbRunAwait(db, applicationMetaUpdateRatings, [
      row.ratings_count + 1,
      row.ratings_sum + body.rating,
      name,
    ]);

    const newRow = await dbGetAwait<ApplicationMetaApi>(
      db,
      applicationMetaGet,
      [name],
    );

    await dbClose(db);

    return snakeToCamel<ApplicationMetaApi, ApplicationMeta>(newRow);
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: (e as Error)?.message,
    });
  }
});
