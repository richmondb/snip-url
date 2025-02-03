"use server";
import db from "@/db/db";
import { sql } from "kysely";
import { revalidatePath } from "next/cache";

export const insertUrl = async (
	url: string,
	shortCode: string,
	userId: string,
) => {
	try {
		const query = db
			.insertInto("urls")
			.values({
				url,
				short_code: shortCode,
				user_id: userId,
				active: true,
			})
			.returning("id");

		const result = await query.executeTakeFirst();

		return {
			success: true,
			message: "Url inserted",
			id: result?.id,
		};
	} catch (e) {
		console.error(e);
		return {
			success: false,
			message: "Failed to insert url",
		};
	}
};
//
export const getAllUrls = async (id: string) => {
	try {
		return await db
			.selectFrom("urls")
			.selectAll()
			.where("user_id", "=", id)
			.execute();
	} catch (e) {
		console.error(e);
		return null;
	}
};
//
export const getUrl = async (short_code: string) => {
	try {
		const query = db
			.selectFrom("urls")
			.selectAll()
			.where("short_code", "=", short_code)
			.where("active", "=", true);

		const result = await query.executeTakeFirst();

		return result;
	} catch (e) {
		console.error(e);
		return null;
	}
};

export const deleteUrl = async (id: number) => {
	try {
		const query = db.deleteFrom("urls").where("id", "=", id);

		const result = await query.executeTakeFirst();

		revalidatePath("/");

		return {
			success: true,
			message: "Url deleted",
			id: result.numDeletedRows,
		};
	} catch (e) {
		revalidatePath("/");
		console.error(e);
		return {
			success: false,
			message: "Failed to delete url",
		};
	}
};

export const toggleUrlState = async (id: number) => {
	try {
		const query = db
			.updateTable("urls")
			.set("active", sql`NOT active`)
			.where("id", "=", id);

		const result = await query.executeTakeFirst();

		revalidatePath("/");

		return {
			success: true,
			message: "Url state toggled",
			id: result.numUpdatedRows,
		};
	} catch (e) {
		revalidatePath("/");
		console.error(e);
		return {
			success: false,
			message: "Failed to toggle url state",
		};
	}
};
