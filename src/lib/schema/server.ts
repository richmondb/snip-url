"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const isUser = async () => {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (!session) {
		return null;
	}

	const { id } = session.user;

	return id;
};
