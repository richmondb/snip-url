import { useSession } from "@/lib/auth-client";

export default function User() {
	const { data: session, isPending, error } = useSession();

	return {
		session,
		isPending,
		error,
	};
}
