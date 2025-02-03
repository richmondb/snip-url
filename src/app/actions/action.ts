"use server";

import generateShortCode from "@/lib/generate-short-url";
import { isUser } from "@/lib/schema/server";
import { urlSchema } from "@/lib/schema/url-schema";
import { insertUrl } from "@/services/query";
import { revalidatePath } from "next/cache";

type returnState =
	| {
			success: boolean;
			message?: string;
			errors?: {
				url?: string[];
			} | null;
			short_code?: string;
			id?: number | undefined;
	  }
	| undefined;

export const addUrl = async (prevState: returnState, form: FormData) => {
	const formData = {
		url: form.get("url"),
	};

	const parsedUrl = urlSchema.safeParse(formData);

	// console.log("parsedurl success", parsedUrl.success);

	if (!parsedUrl.success) {
		const errors = parsedUrl.error.flatten().fieldErrors;
		console.error({
			success: false,
			message: undefined,
			errors: errors,
			short_code: undefined,
			id: undefined,
		});

		revalidatePath("/");

		return {
			success: false,
			message: undefined,
			errors: errors,
			short_code: undefined,
			id: undefined,
		};
	}

	// create a unique string using nanoid
	const uid = generateShortCode();

	try {
		const userId = await isUser();

		if (!userId) {
			return {
				success: false,
				message: "User not found",
				errors: undefined,
				short_code: undefined,
				id: undefined,
			};
		}

		const result = await insertUrl(formData.url as string, uid, userId);

		if (!result.success) {
			return {
				success: false,
				message: "Failed to insert url",
				errors: undefined,
				short_code: undefined,
				id: undefined,
			};
		}

		// console.log("result", result);

		revalidatePath("/");

		return {
			success: true,
			message: "Successfully inserted",
			errors: undefined,
			short_code: result.short_code,
			id: result.id,
		};
	} catch (e) {
		revalidatePath("/");
		console.error(e);
		return {
			success: false,
			message: undefined,
			errors: undefined,
			short_code: undefined,
			id: undefined,
		};
	}
};
