import { promises as fs } from "fs";
import * as path from "node:path";
import db from "@/db/db";
import { FileMigrationProvider, Migrator } from "kysely";
import { run } from "kysely-migration-cli";

const migrationFolder = path.join(__dirname, "../migrations");

async function migrateToLatest() {
	const migrator = new Migrator({
		db,
		provider: new FileMigrationProvider({
			fs,
			path,
			// This needs to be an absolute path.
			migrationFolder,
		}),
	});

	run(db, migrator, migrationFolder);
}

migrateToLatest();
