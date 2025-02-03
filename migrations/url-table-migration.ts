import type { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable("urls")
		.addColumn("id", "serial", (col) => col.primaryKey())
		.addColumn("url", "text", (col) => col.notNull())
		.addColumn("short_code", "text", (col) => col.notNull())
		.addColumn("active", "boolean", (col) => col.notNull().defaultTo(true))
		.addColumn("user_id", "text", (col) => col.notNull().references("user.id"))
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema.dropTable("urls").execute();
}
