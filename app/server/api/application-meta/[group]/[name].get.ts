// Third Party Imports
import { createClient } from "@vercel/postgres";

// Local Imports
import { ApplicationMeta, ApplicationMetaApi, GroupName } from "~/types";

export default defineEventHandler(async (event): Promise<ApplicationMeta> => {
  try {
    const name = getRouterParam(event, "name");
    const group = getRouterParam(event, "group") as GroupName | undefined;

    if (!name || !group) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request: no name or group provided.",
      });
    }

    const client = createClient();
    await client.connect();

    const row = await applicationMetaGet(client, [name]);

    console.log("row: ", row);

    if (!!row) {
      await client.end();

      return snakeToCamel<ApplicationMetaApi, ApplicationMeta>({
        ...row,
        created_at: row.created_at.toISOString() as unknown as Date,
        updated_at: row.updated_at.toISOString() as unknown as Date,
      });
    }

    await applicationMetaInsert(client, [name, group]);

    const newRow = await applicationMetaGet(client, [name]);

    await client.end();

    if (!!newRow) {
      return snakeToCamel<ApplicationMetaApi, ApplicationMeta>({
        ...newRow,
        created_at: newRow.created_at.toISOString() as unknown as Date,
        updated_at: newRow.updated_at.toISOString() as unknown as Date,
      });
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
