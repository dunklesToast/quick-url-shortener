import * as sqlite3 from "sqlite3";
import { open } from "sqlite";
const { nanoid } = require("nanoid");

let db;

async function init() {
  db = await open({
    filename: "/tmp/shortener.db",
    driver: sqlite3.Database,
  });
  await db.run(
    "CREATE TABLE IF NOT EXISTS links (id TEXT primary key, target TEXT)"
  );
}

async function insertUrl(url: string) {
  if (!db) await init();
  const id = nanoid(8);
  await db.run("INSERT INTO links (id, target) VALUES (?, ?)", id, url);
  return id;
}

async function findShortened(id: string) {
  if (!db) await init();
  return db.get("SELECT * FROM links WHERE id=(?)", id);
}

export { init, insertUrl, findShortened };
