// Local Imports
import applicationMetaGet from "~/server/queries/application-meta.get";
import applicationMetaInsert from "~/server/queries/application-meta.insert";
import { ApplicationMeta, ApplicationMetaApi } from "~/types";

export default defineEventHandler(async (event): Promise<ApplicationMeta> => {
  try {
    const name = getRouterParam(event, "name");
    const group = getRouterParam(event, "group");

    if (!name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request: no name provided.",
      });
    }

    const db = getDb();

    const row = await dbGetAwait<ApplicationMetaApi>(db, applicationMetaGet, [
      name,
    ]);

    if (!!row) {
      await dbClose(db);

      return snakeToCamel<ApplicationMetaApi, ApplicationMeta>(row);
    }

    await dbRunAwait(db, applicationMetaInsert, [name, group]);

    const newRow = await dbGetAwait<ApplicationMetaApi>(
      db,
      applicationMetaGet,
      [name],
    );

    await dbClose(db);

    if (!!newRow) {
      return snakeToCamel<ApplicationMetaApi, ApplicationMeta>(newRow);
    }

    throw createError({
      statusCode: 500,
      statusMessage: "Error inserting new row.",
    });
  } catch (err) {
    throw createError({
      statusCode: 500,
      statusMessage: (err as Error)?.message,
    });
  }
});
