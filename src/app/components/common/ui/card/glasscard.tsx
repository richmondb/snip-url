"use client";
import clsx from "clsx";
import React from "react";

function Glasscard({
	children,
	className,
}: { children: React.ReactNode; className?: string }) {
	return (
		<div
			className={clsx(
				className,
				"relative w-full rounded-2xl border border-solid border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.01)] ",
			)}
		>
			{children}
		</div>
	);
}

export default Glasscard;
