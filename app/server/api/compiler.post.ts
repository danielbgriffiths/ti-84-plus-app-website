// Third Party Imports
import { execFile } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body.groupName || !body.scriptNames) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request: groupName and scriptNames are required.",
      });
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const executableProcess = path.resolve(
      __dirname,
      "../../proc/target/release/compiler",
    );

    const env = { ...process.env };

    const executedProcess = new Promise((resolve, reject) => {
      execFile(
        executableProcess,
        [body.groupName, body.scriptNames],
        { env },
        (error: any, stdout: string, stderr: string): void => {
          if (error) {
            console.error(`Error executing Rust script: ${error.message}`);
            return reject(
              createError({
                statusCode: 500,
                statusMessage: `Internal Server Error: ${error.message}`,
              }),
            );
          }

          if (stderr) {
            console.error(`Rust script stderr: ${stderr}`);
            return reject(
              createError({
                statusCode: 501,
                statusMessage: `Internal Proc Error: ${stderr}`,
              }),
            );
          }

          resolve({
            zipContent: stdout.trim(),
          });
        },
      );
    });

    return await executedProcess;
  } catch (error) {
    console.error("error: ", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
