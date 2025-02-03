export function getBasePath(): string {
	if (process.env.NODE_ENV === "development") {
		return "http://localhost:3000";
	}
	if (process.env.NODE_ENV === "production") {
		return process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL || "";
	}
	return process.env.NEXT_PUBLIC_VERCEL_URL || "";
}
