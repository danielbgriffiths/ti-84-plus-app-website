// Local Imports
import applicationMetaUpdateViews from "~/server/queries/application-meta.update-views";
import applicationMetaGet from "~/server/queries/application-meta.get";
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

    await dbRunAwait(db, applicationMetaUpdateViews, [row.views + 1, name]);

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
