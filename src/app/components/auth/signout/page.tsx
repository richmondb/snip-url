"use client";
import { signOut } from "@/lib/auth-client";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React from "react";

function SignoutComponent() {
	const router = useRouter();
	const handleLogout = async () => {
		await signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/"); // redirect to login page
					router.refresh();
				},
			},
		});
	};
	return (
		<div>
			<Button
				onClick={handleLogout}
				className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-lg/3 font-semibold text-white shadow-inner"
			>
				Log Out
			</Button>
		</div>
	);
}
export default SignoutComponent;
