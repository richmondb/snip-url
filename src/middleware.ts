import type { auth } from "@/lib/auth";
import { betterFetch } from "@better-fetch/fetch";
import { type NextRequest, NextResponse } from "next/server";

type Session = typeof auth.$Infer.Session;

export default async function authMiddleware(request: NextRequest) {
	// Fetch the session from your backend
	const { data: session } = await betterFetch<Session>(
		"/api/auth/get-session",
		{
			baseURL: request.nextUrl.origin,
			headers: {
				cookie: request.headers.get("cookie") || "",
			},
		},
	);

	// If the user is not authenticated and accessing a protected route, redirect to signin
	if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/auth/signin", request.url));
	}

	// If the user is authenticated and accessing sign-in or sign-up, redirect to dashboard
	if (
		session &&
		(request.nextUrl.pathname.startsWith("/auth/signin") ||
			request.nextUrl.pathname.startsWith("/auth/signup"))
	) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	// Allow the request to proceed to its destination
	return NextResponse.next();
}

export const config = {
	// Apply this middleware to the following routes
	matcher: ["/dashboard/:path*", "/auth/:path*"],
};
