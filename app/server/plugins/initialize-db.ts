// Third Party Imports
import sqlite3 from "sqlite3";

export default defineNitroPlugin((nitroApp) => {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(
      process.env.DATABASE_ADDRESS!,
      (err): void => {
        if (!err) return;
        console.error("Error opening database", err.message);
        reject(err.message);
      },
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS application_meta (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR NOT NULL UNIQUE,
      group_name VARCHAR NOT NULL,
      views INTEGER NOT NULL DEFAULT 0,
      downloads INTEGER NOT NULL DEFAULT 0,
      ratings_count INTEGER NOT NULL DEFAULT 0,
      ratings_sum INTEGER NOT NULL DEFAULT 0,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`,
      (err): void => {
        if (err) return reject(err.message);
        resolve("Successfully created application_meta table");
      },
    );

    db.close((err): void => {
      if (err) return reject(err);
      console.log("Closed SQLite database connection");
    });
  });
});
