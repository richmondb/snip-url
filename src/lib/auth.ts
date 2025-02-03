import db from "@/db/db";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
	database: {
		db: db,
		type: "postgres",
	},
	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
	},
	plugins: [nextCookies()],
});
