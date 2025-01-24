import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

type ModalProps = {
	confirmDelete?: () => void;
};

export default function Modal({ confirmDelete }: ModalProps) {
	const [isOpen, setIsOpen] = useState(false);

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	function handleClose() {
		setIsOpen(false);
		if (confirmDelete) {
			confirmDelete();
		}
	}

	return (
		<>
			<Button
				onClick={open}
				className="p-2.5 text-start hover:bg-white/10 text-red-600 transition-all duration-300"
			>
				Open dialog
			</Button>

			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10 focus:outline-none"
				onClose={close}
			>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<DialogPanel
							transition
							className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
						>
							<DialogTitle
								as="h3"
								className="text-base/7 font-medium text-white"
							>
								Payment successful
							</DialogTitle>
							<p className="mt-2 text-sm/6 text-white/50">
								Your payment has been successfully submitted. We’ve sent you an
								email with all of the details of your order.
							</p>
							<div className="mt-4">
								<div className="flex gap-3">
									<Button
										className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  data-[hover]:bg-red-500 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
										onClick={handleClose}
									>
										Yes, Delete!
									</Button>
									<Button
										className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
										onClick={() => setIsOpen(false)}
									>
										Cancel
									</Button>
								</div>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
}
