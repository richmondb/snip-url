"use client";
import User from "@/app/components/user/user-dal";
import React from "react";
function Page() {
	const { session } = User();

	// console.log(session);

	return <div>{JSON.stringify(session)}</div>;
}
export default Page;
