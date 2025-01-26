import Glasscard from "@/app/components/common/ui/card/glasscard";
import PopoverDropdown from "@/app/components/common/ui/popover/popover-dropdown";
import { getAllUrls } from "@/db/db";
import type { urlType } from "@/lib/definitions/url-type";
import { isSession } from "@/lib/schema/server";
import React from "react";

async function UrlList() {
	const session = await isSession();

	const userId = session?.user.id as string;

	const data = getAllUrls(userId);

	if (!data || !data.length) {
		return null;
	}

	return (
		<div className={"w-full max-w-5xl my-16 mx-auto"}>
			<Glasscard>
				{/*<div className={""}>*/}
				{/*	<div className="relative  shadow-md sm:rounded-lg">*/}
				{/*		<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-x-scroll">*/}
				{/*			<thead className="text-sm text-gray-700 uppercase dark:text-gray-400">*/}
				{/*				<tr>*/}
				{/*					<th*/}
				{/*						scope="col"*/}
				{/*						className="px-6 py-3 dark:bg-gray-800 max-w-fit"*/}
				{/*					>*/}
				{/*						#*/}
				{/*					</th>*/}
				{/*					<th scope="col" className="px-6 py-3 ">*/}
				{/*						Url{" "}*/}
				{/*					</th>*/}
				{/*					<th*/}
				{/*						scope="col"*/}
				{/*						className="px-6 py-3 bg-gray-50 dark:bg-gray-800 max-w-fit"*/}
				{/*					>*/}
				{/*						Short Code*/}
				{/*					</th>*/}
				{/*					<th scope="col" className="px-6 py-3 max-w-fit">*/}
				{/*						Active*/}
				{/*					</th>*/}
				{/*					<th scope="col" className="px-6 py-3 max-w-fit">*/}
				{/*						Options*/}
				{/*					</th>*/}
				{/*				</tr>*/}
				{/*			</thead>*/}
				{/*			<tbody>*/}
				{/*				{data?.map((item: urlType) => (*/}
				{/*					<tr*/}
				{/*						className="border-b border-gray-200 dark:border-gray-700"*/}
				{/*						key={item.id}*/}
				{/*					>*/}
				{/*						<th*/}
				{/*							scope="row"*/}
				{/*							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800 max-w-fit"*/}
				{/*						>*/}
				{/*							{item.id}*/}
				{/*						</th>*/}
				{/*						<td className="px-6 py-4 ">{item.url}</td>*/}
				{/*						<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 max-w-fit">*/}
				{/*							{item.short_code}*/}
				{/*						</td>*/}
				{/*						<td className="px-6 py-4 max-w-fit justify-center text-center">*/}
				{/*							{item.active ? (*/}
				{/*								<span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">*/}
				{/*									Active*/}
				{/*								</span>*/}
				{/*							) : (*/}
				{/*								<span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">*/}
				{/*									Inactive*/}
				{/*								</span>*/}
				{/*							)}*/}
				{/*						</td>*/}
				{/*						<td className="px-6 py-4 max-w-fit">*/}
				{/*							<PopoverDropdown*/}
				{/*								id={item.id}*/}
				{/*								url={item.url}*/}
				{/*								key={item.id}*/}
				{/*							/>*/}
				{/*						</td>*/}
				{/*					</tr>*/}
				{/*				))}*/}
				{/*			</tbody>*/}
				{/*		</table>*/}
				{/*	</div>*/}
				{/*</div>*/}

				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
							<tr>
								<th
									scope="col"
									className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
								>
									#
								</th>
								<th scope="col" className="px-6 py-3">
									Url
								</th>
								<th
									scope="col"
									className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
								>
									Short Code
								</th>
								<th scope="col" className="px-6 py-3">
									Active
								</th>
								<th
									scope="col"
									className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
								>
									Options
								</th>
							</tr>
						</thead>
						<tbody>
							{data?.map((item: urlType) => (
								<tr
									key={item.id}
									className="border-b border-gray-200 dark:border-gray-700"
								>
									<th
										scope="row"
										className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
									>
										{item.id}
									</th>
									<td className="px-6 py-4">{item.url}</td>
									<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
										{item.short_code}
									</td>
									<td className="px-6 py-4 text-center">
										{item.active ? (
											<span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300">
												Active
											</span>
										) : (
											<span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">
												Inactive
											</span>
										)}
									</td>
									<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-center">
										<PopoverDropdown
											id={item.id}
											url={item.url}
											key={item.id}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Glasscard>
		</div>
	);
}

export default UrlList;
