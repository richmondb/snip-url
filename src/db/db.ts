import type { urlType } from "@/lib/definitions/url-type";
import Database from "better-sqlite3";
import type { Statement } from "better-sqlite3";
const db = new Database("db.sqlite");
db.pragma("journal_mode = WAL");

export const createTable = db.prepare(
	`CREATE TABLE IF NOT EXISTS urls (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         url TEXT,
         short_code TEXT,
         active BOOLEAN DEFAULT TRUE,
         user_id INTEGER)
 `,
);

createTable.run();

export const insertUrl = (url: string, short_code: string) => {
	const query = db.prepare(
		"INSERT INTO urls (url, short_code, active, user_id) VALUES (?, ?, ?, ?)",
	);

	const result = query.run(url, short_code, 1, 0);

	console.log(result);

	return result;
};

export const getAllUrls = () => {
	const query: Statement<urlType[]> = db.prepare("SELECT * FROM urls");
	const result = query.all() as urlType[];
	console.log(result);
	return result;
};

export const getUrl = (short_code: string) => {
	const query = db.prepare("SELECT * FROM urls WHERE short_code = ?;");

	const result = query.get(short_code) as urlType;

	if (!result) {
		return null;
	}

	if (!result.active) {
		return null;
	}

	console.log(result);

	return result;
};

export default db;
