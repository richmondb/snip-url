import { nextCookies } from "better-auth/next-js";
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient({
	// baseURL: process.env.BETTER_AUTH_URL, // the base url of your auth server
	plugins: [nextCookies()],
});

export const { signIn, signUp, signOut, useSession } = authClient;
