"use client";
import type React from "react";
import { useEffect, useState } from "react";

interface MessageProps {
	timeout: number;
	message: string | null | undefined;
	type: "error" | "success" | "info";
}

const TimeInfoPrompt: React.FC<MessageProps> = ({ timeout, message, type }) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, timeout);

		return () => clearTimeout(timer);
	}, [timeout]);

	if (!visible) return null;

	return (
		<p
			className={
				type === "error"
					? "text-red-600"
					: type === "success"
						? "text-green-600"
						: "text-blue-600"
			}
		>
			{message}
		</p>
	);
};

export default TimeInfoPrompt;
