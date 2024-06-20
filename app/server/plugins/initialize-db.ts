// Third Party Imports
import applicationMetaTable from "~/server/queries/application-meta.table";
import emailListTable from "~/server/queries/email-list.table";
import donationListTable from "~/server/queries/donation-list.table";

export default defineNitroPlugin(async (): Promise<void> => {
  try {
    const db = getDb();
    await dbRunAwait(db, applicationMetaTable);
    await dbRunAwait(db, emailListTable);
    await dbRunAwait(db, donationListTable);
    await dbClose(db);
  } catch (e) {
    console.error("e: ", (e as Error)?.message);
  }
});
