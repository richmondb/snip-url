'use server'
import db from "@/db/db"
import {revalidatePath} from "next/cache";

export const deleteUrl = async (id: string) => {
    const query = db.prepare('DELETE FROM urls WHERE id = ?;');

    revalidatePath("/")

    return query.run(id);
}

export const toggleActive = async (id: string) => {
    const query = db.prepare('UPDATE urls SET active = NOT active WHERE id = ?;');

    revalidatePath("/")

    return query.run(id);

}