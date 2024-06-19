// Third Party Imports
import sqlite3 from "sqlite3";

export default defineEventHandler((event) => {
  return new Promise((resolve, reject) => {
    const name = getRouterParam(event, "name");
    const group = getRouterParam(event, "group");

    if (!name) {
      return reject({
        statusCode: 400,
        statusMessage: "Bad Request: no name provided.",
      });
    }

    const db = new sqlite3.Database(process.env.DATABASE_ADDRESS!, (err) => {
      if (err) {
        reject({
          statusCode: 500,
          statusMessage: err.message,
        });
      }
    });

    db.get(
      `SELECT * FROM application_meta WHERE name = ?`,
      [name],
      (err, row) => {
        if (err) {
          reject({
            statusCode: 500,
            statusMessage: err.message,
          });
        }

        if (!row) {
          db.run(
            `INSERT INTO application_meta (name, group_name, views, downloads, ratings_count, ratings_sum, created_at, updated_at)
             VALUES (?, ?, 0, 0, 0, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
            [name, group],
            (err) => {
              if (err) {
                reject({
                  statusCode: 500,
                  statusMessage: err.message,
                });
              }

              db.get(
                `SELECT * FROM application_meta WHERE name = ?`,
                [name],
                (err, newRow) => {
                  if (err) {
                    reject({
                      statusCode: 500,
                      statusMessage: err.message,
                    });
                  }

                  resolve({
                    statusCode: 200,
                    body: newRow,
                  });
                },
              );
            },
          );
        } else {
          resolve({
            statusCode: 200,
            body: row,
          });
        }
      },
    );

    db.close((err) => {
      if (err) {
        reject({
          statusCode: 500,
          statusMessage: "Error closing DB connection",
        });
      }
    });
  });
});
