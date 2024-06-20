// Third Party Imports
import sqlite3 from "sqlite3";

// Local Imports
import type { SqlLiteErrorCallback } from "~/types";

export default function (callback?: SqlLiteErrorCallback): sqlite3.Database {
  return new sqlite3.Database(process.env.DATABASE_FILE_PATH!, (err): void => {
    if (typeof callback === "function") {
      return callback(err);
    }

    if (!err) return;
    console.error("Error opening database", err.message);
  });
}
