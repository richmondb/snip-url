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
			input?: string;
	  }
	| undefined;

export const addUrl = async (prevState: returnState, form: FormData) => {
	const formData = {
		url: form.get("url"),
	};

	const parsedUrl = urlSchema.safeParse(formData);

	console.log("parsedurl success", parsedUrl.success);

	if (!parsedUrl.success) {
		const errors = parsedUrl.error.flatten().fieldErrors;
		console.error({
			success: false,
			message: undefined,
			errors: errors,
			input: formData.url as string,
		});

		revalidatePath("/");

		return {
			success: false,
			message: undefined,
			errors: errors,
			input: formData.url as string,
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
				input: formData.url as string,
			};
		}

		const result = insertUrl(formData.url as string, uid, userId);

		console.log("session", result);
	} catch (e) {
		console.error(e);
		return {
			success: false,
			message: undefined,
			errors: undefined,
			input: formData.url as string,
		};
	}

	revalidatePath("/");

	return {
		success: true,
		message: "Successfully inserted",
		errors: undefined,
		input: formData.url as string,
	};
};
