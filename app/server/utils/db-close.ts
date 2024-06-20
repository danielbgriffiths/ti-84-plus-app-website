// Third Party Imports
import sqlite3 from "sqlite3";

export default function (db: sqlite3.Database): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    db.close((err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    });
  });
}
