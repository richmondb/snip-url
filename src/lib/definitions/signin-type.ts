import { z } from "zod";

export const SigninFormSchema = z.object({
	email: z.string().email({ message: "Please enter a valid email." }).trim(),
	password: z.string().trim(),
});

export type SigninFormState =
	| {
			errors?: {
				email?: string[];
				password?: string[];
			};
			message?: string;
			input?: z.infer<typeof SigninFormSchema>;
	  }
	| undefined;

export type SigninFormSchemaType = z.infer<typeof SigninFormSchema> &
	SigninFormState;
