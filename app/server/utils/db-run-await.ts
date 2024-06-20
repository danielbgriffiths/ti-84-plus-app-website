// Third Party Imports
import sqlite3 from "sqlite3";

export default async function (
  db: sqlite3.Database,
  templateString: string,
  params?: any,
): Promise<unknown> {
  return new Promise<void>((resolve, reject) => {
    db.run(templateString, params, function (err) {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    });
  });
}
