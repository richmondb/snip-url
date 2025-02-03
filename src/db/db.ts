import { Kysely, PostgresDialect } from "kysely";
import type { DB } from "kysely-codegen";
// import Database from "better-sqlite3";
// const db = new Database("db.sqlite");
// db.pragma("journal_mode = WAL");
import { Pool } from "pg";

const dialect = new PostgresDialect({
	pool: new Pool({
		connectionString: process.env.DATABASE_URL,
	}),
});

const db = new Kysely<DB>({
	dialect,
});

// create Urls table

export default db;
