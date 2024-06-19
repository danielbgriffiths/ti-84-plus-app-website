// Third Party Imports
import sqlite3 from "sqlite3";

export default defineEventHandler((event) => {
  return new Promise((resolve, reject) => {
    readBody(event).then((body) => {
      if (!body.ratingsCount || !body.ratingsSum || !body.name) {
        return reject({
          statusCode: 400,
          statusMessage: "Bad Request: object is not valid.",
        });
      }

      const db = new sqlite3.Database(
        process.env.DATABASE_ADDRESS!,
        (err): void => {
          if (!err) return;
          return reject({
            statusCode: 500,
            statusMessage: err.message,
          });
        },
      );

      db.run(
        `UPDATE application_meta SET ratingsCount = ?, ratingsSum = ?, updatedAt = CURRENT_TIMESTAMP WHERE name = ?`,
        [body.ratingsCount, body.ratingsSum, body.name],
        (err): void => {
          if (!err) {
            return resolve({
              statusCode: 200,
              statusMessage: "Success",
            });
          }
          return reject({
            statusCode: 500,
            statusMessage: err.message,
          });
        },
      );

      db.close((err): void => {
        if (!err) return;
        return reject({
          statusCode: 500,
          statusMessage: "Error closing DB connection",
        });
      });
    });
  });
});
