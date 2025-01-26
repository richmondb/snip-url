import type { urlType } from "@/lib/definitions/url-type";
import Database from "better-sqlite3";

const db = new Database("db.sqlite");
db.pragma("journal_mode = WAL");

export const createTable = db.prepare(
	`CREATE TABLE IF NOT EXISTS urls (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         url TEXT,
         short_code TEXT,
         active BOOLEAN DEFAULT TRUE,
         user_id TEXT,
		 FOREIGN KEY (user_id) REFERENCES user(id))
 `,
);

createTable.run();

export const insertUrl = (url: string, shortCode: string, userId: string) => {
	const query = db.prepare(
		"INSERT INTO urls (url, short_code, active, user_id) VALUES (?, ?, ?, ?)",
	);

	const result = query.run(url, shortCode, 1, userId);

	// console.log(result);

	return result;
};

export const getAllUrls = (userId: string) => {
	const query = db.prepare("SELECT * FROM urls WHERE user_id = ?");
	const result = query.all(userId) as urlType[];
	// console.log(result);
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

	// console.log(result);

	return result;
};

export default db;
