"use client";
import Modal from "@/app/components/common/ui/modal/Modal";
import { deleteUrl, toggleActive } from "@/services/db-actions";
import {
	CloseButton,
	Popover,
	PopoverButton,
	PopoverPanel,
} from "@headlessui/react";
import React from "react";

function PopoverDropdown({ id, url }: { id: string; url: string }) {
	const handleToggle = async () => {
		const result = await toggleActive(id);
		if (result) {
			console.log("result", result);
		}
	};

	const handleDelete = async () => {
		const result = await deleteUrl(id);
		if (result) {
			console.log("result", result);
			close();
		}
	};

	return (
		<Popover className="relative" key={id}>
			<PopoverButton>Action</PopoverButton>
			<PopoverPanel
				anchor="bottom start"
				className="flex flex-col bg-white/15 backdrop-blur-lg rounded"
			>
				<CloseButton
					as={"button"}
					type={"button"}
					onClick={handleToggle}
					className={
						"p-2.5 text-start hover:bg-white/10 transition-all duration-300"
					}
				>
					Toggle State
				</CloseButton>
				<CloseButton
					as={"a"}
					className={
						"p-2.5 text-start hover:bg-white/10 transition-all duration-300"
					}
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					Visit Link
				</CloseButton>
				{/*<button*/}
				{/*	type={"button"}*/}
				{/*	onClick={handleDelete}*/}
				{/*	className={*/}
				{/*		"p-2.5 text-start hover:bg-white/10 text-red-600 transition-all duration-300"*/}
				{/*	}*/}
				{/*>*/}
				{/*	Delete*/}
				{/*</button>*/}
				<Modal key={id} confirmDelete={handleDelete} />
			</PopoverPanel>
		</Popover>
	);
}

export default PopoverDropdown;
