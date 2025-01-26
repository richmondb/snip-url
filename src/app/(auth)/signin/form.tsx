"use client";
import Glasscard from "@/app/components/common/ui/card/glasscard";
import {
	Button,
	Checkbox,
	Description,
	Field,
	Fieldset,
	Input,
	Label,
	Legend,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import React, { useState, useActionState } from "react";
import signinAction from "./action";

function SigninForm() {
	const [enabled, setEnabled] = useState(false);
	const [state, formaction, isPending] = useActionState(
		signinAction,
		undefined,
	);
	return (
		<div>
			<Glasscard className={"sm:w-96"}>
				<div className="w-full px-4">
					<form action={formaction}>
						<Fieldset className="space-y-6 rounded-xl p-6 sm:p-10">
							<Legend className="text-base/7 font-semibold text-white">
								Sign In to your Account
							</Legend>
							<Field className={"w-full"}>
								<Label className="text-sm/6 font-medium text-white">
									Email
								</Label>
								<Description className="text-sm/6 text-white/50">
									Enter your email address
								</Description>
								<Input
									type="email"
									name={"email"}
									defaultValue={state?.input?.email}
									required
									className={clsx(
										"w-full",
										"mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
										"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
									)}
								/>
								{state?.errors?.email?.map((value, index) => (
									<Description
										className="text-sm/4 mt-2 text-red-500"
										key={index}
									>
										{value}
									</Description>
								))}
							</Field>
							<Field>
								<Label className="text-sm/6 font-medium text-white">
									Password
								</Label>
								<Description className="text-sm/6 text-white/50">
									Enter your secret password
								</Description>
								<Input
									type={enabled ? "text" : "password"}
									name={"password"}
									defaultValue={state?.input?.password}
									required
									className={clsx(
										"mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
										"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
									)}
								/>
								{state?.errors?.password?.map((value, index) => (
									<Description
										className="text-sm/4  mt-2 text-red-500"
										key={index}
									>
										{value}
									</Description>
								))}
							</Field>
							<Field className={"w-full flex gap-2 items-center"}>
								<Checkbox
									checked={enabled}
									onChange={setEnabled}
									className="group size-5 block rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
								>
									<CheckIcon className="hidden size-3 fill-black group-data-[checked]:block" />
								</Checkbox>
								<Label>Show Password</Label>
							</Field>
							<Button
								type={"submit"}
								className="inline-flex items-center gap-2  rounded-md bg-gray-700 py-1.5 px-3 text-base/5 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
							>
								{isPending ? (
									<>
										{" "}
										<svg
											className="animate-spin -ml-1 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<title>Loading Spinner</title>
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
										Loading
									</>
								) : (
									<>Sign In</>
								)}
							</Button>
							{state?.message && (
								<div className={"text-center text-sm text-red-500"}>
									<p>{state?.message}</p>
								</div>
							)}
							<hr className={"border-white/20"} />
							<div className={"text-center text-sm"}>
								<p>
									Doesn&#39;t have an Account?
									<br />
									<a
										href={"/auth/signup"}
										className={"underline underline-offset-4"}
									>
										Sign Up
									</a>{" "}
									instead.
								</p>
							</div>
						</Fieldset>
					</form>
				</div>
			</Glasscard>
		</div>
	);
}
export default SigninForm;
