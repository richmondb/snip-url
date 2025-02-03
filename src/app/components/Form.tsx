"use client";
import { addUrl } from "@/app/actions/action";
import Glasscard from "@/app/components/common/ui/card/glasscard";
import { useSession } from "@/lib/auth-client";
import { getBasePath } from "@/utils/getBasePath";
import Link from "next/link";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

function Form() {
	const [state, action, isPending] = useActionState(addUrl, undefined);

	const { data } = useSession();

	const basepath = getBasePath();

	useEffect(() => {
		if (state?.success) {
			navigator.clipboard
				.writeText(`${basepath}/${state.short_code}`)
				.then(() => {
					toast.success("Copied to clipboard");
				});
		}
	}, [state, basepath]);

	return (
		<div className={"lg:w-1/2"}>
			<Glasscard>
				<div className="w-full p-6 md:p-8">
					<h2 className="font-bold text-2xl pb-7 text-center">Get Started</h2>
					<p className="font-semibold text-base pb-4 text-center">
						Paste your long URL below and click the button to shorten it.
					</p>
					<form action={action}>
						<input
							type="text"
							className="w-full p-4 my-4 rounded-lg border border-solid border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.01)] shadow-[0_0_8px_rgba(255,255,255,0.2)]
                active:shadow-[0_0_8px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
							placeholder="https://example.com/my-super-long-url"
							name={"url"}
							required={true}
						/>
						<div className={"my-1 flex justify-center items-center"}>
							{state?.errors?.url?.map((url, index) => (
								<p key={index} className={"text-red-600 text-sm"}>
									{url}
								</p>
							))}
						</div>

						<div className={"w-full flex justify-center pt-4"}>
							{data ? (
								<button
									className="md:w-1/2 p-2 px-8 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold text-center text-lg flex justify-center items-center"
									type={"submit"}
									disabled={isPending}
								>
									{isPending ? (
										<span className="flex items-center">
											<svg
												className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<title>Loading...</title>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												/>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												/>
											</svg>
											<span className={"font-bold"}>Creating your link</span>
										</span>
									) : (
										<span className={"font-bold"}>Shorten URL</span>
									)}
								</button>
							) : (
								<Link
									className="md:w-1/2 p-2 px-8 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-bold text-center text-lg flex justify-center items-center"
									href={"/auth/signin"}
								>
									<span className={"font-bold"}>Shorten URL</span>
								</Link>
							)}
						</div>
					</form>
				</div>
			</Glasscard>
		</div>
	);
}

export default Form;
