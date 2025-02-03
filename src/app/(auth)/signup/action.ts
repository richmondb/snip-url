"use server";

import { auth } from "@/lib/auth";
import { signUp } from "@/lib/auth-client";
import type { SignupFormState } from "@/lib/definitions/signup-type";
import { SignupFormSchema } from "@/lib/definitions/signup-type";
import { APIError } from "better-auth/api";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { z } from "zod";

async function signupAction(state: SignupFormState, formData: FormData) {
	// await new Promise((resolve) => setTimeout(resolve, 1000));

	// get raw form data
	const rawData: z.infer<typeof SignupFormSchema> = {
		username: formData.get("username") as string,
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	// Validate form fields
	const validatedFields = SignupFormSchema.safeParse(rawData);

	// If any form fields are invalid, return early
	if (!validatedFields.success) {
		console.log(validatedFields.error.flatten().fieldErrors);
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			input: rawData,
		};
	}

	const { username, email, password } = validatedFields.data;

	// console.log({ username, email, password });

	// Call the provider or db to create a user...
	const { error } = await signUp.email(
		{
			name: username,
			email,
			password,
			image: undefined,
		},
		{
			onSuccess: async () => {
				try {
					await auth.api.signInEmail({
						body: {
							email,
							password,
						},
					});
				} catch (e) {
					if (e instanceof APIError) {
						console.log(e);
					}
				}
			},
		},
	);

	if (error) {
		// console.log("error", error.message);
		return {
			error: error.message,
			message: error.message,
			input: rawData,
		};
	}

	revalidatePath("/", "layout");

	// Redirect to the dashboard
	redirect("/");
}

export default signupAction;
