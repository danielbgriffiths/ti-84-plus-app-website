// Third Party Imports
import sqlite3 from "sqlite3";

export default async function <T = unknown>(
  db: sqlite3.Database,
  templateString: string,
  params?: any,
): Promise<T> {
  return new Promise<T>((resolve, reject): void => {
    db.get(templateString, params, function (err: Error | null, row: T): void {
      if (err) {
        reject(err.message);
      } else {
        resolve(row);
      }
    });
  });
}
