import fs from "fs/promises";
export default async function readLines(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  return data.split(/\r?\n/);
}
