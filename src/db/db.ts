import type { DB } from "@/lib/definitions/types";
import { Kysely, PostgresDialect } from "kysely";
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
