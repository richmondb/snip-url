export function getBasePath(): string {
	if (process.env.NODE_ENV === "development") {
		return "http://localhost:3000";
	}
	return process.env.VERCEL_URL || "";
}
