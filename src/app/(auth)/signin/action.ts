"use server";

import { auth } from "@/lib/auth";
import type { SigninFormState } from "@/lib/definitions/signin-type";
import { SigninFormSchema } from "@/lib/definitions/signin-type";
import { APIError } from "better-auth/api";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { z } from "zod";

async function signinAction(state: SigninFormState, formData: FormData) {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// get raw form data
	const rawData: z.infer<typeof SigninFormSchema> = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	// Validate form fields
	const validatedFields = SigninFormSchema.safeParse(rawData);

	// If any form fields are invalid, return early
	if (!validatedFields.success) {
		console.log(validatedFields.error.flatten().fieldErrors);
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			input: rawData,
		};
	}

	const { email, password } = validatedFields.data;

	console.log({ email, password });

	// Call the provider or db to create a user...
	// const { error } = await signIn.email(
	// 	{
	// 		email,
	// 		password,
	// 	},
	// 	{
	// 		onSuccess: async () => {
	// 			console.log("Signin action success");
	// 			await auth.api.signInEmail({
	// 				body: {
	// 					email,
	// 					password,
	// 				},
	// 			});
	// 		},
	// 	},
	// );

	try {
		const { user } = await auth.api.signInEmail({
			body: {
				email,
				password,
			},
		});
		if (!user) {
			return {
				error: "User does not exist",
				message: "User does not exist",
				input: rawData,
			};
		}
	} catch (error) {
		if (error instanceof APIError) {
			console.log(error.message);
			return {
				error: error.message,
				message: error.message,
				input: rawData,
			};
		}
		return {
			error: "Invalid email or password",
			message: "Invalid email or password",
			input: rawData,
		};
	}

	// if (error) {
	// 	console.log("error", error.message);
	// 	return {
	// 		error: error.message,
	// 		message: error.message,
	// 		input: rawData,
	// 	};
	// }

	revalidatePath("/", "layout");

	// Redirect to the dashboard
	redirect("/");
}

export default signinAction;
