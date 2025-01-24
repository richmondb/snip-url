import Form from "@/app/components/Form";
import UrlList from "@/app/components/url-list/UrlList";
import { Suspense } from "react";
// import db from '@/db/db'
// import {createTable} from "@/db/db";

export default function Home() {
	return (
		<div
			className={"flex flex-col p-8 my-44 items-center justify-center w-full"}
		>
			<div className={"md:p-10"}>
				<h1 className="font-bold pb-8 text-4xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
					SnipURL
				</h1>
				<p className="font-semibold text-sm sm:text-base pb-6 px-8 text-center">
					Effortlessly shorten your URLs and share them anywhere. SnipURL makes
					link sharing simple, fast, and effective.
				</p>
			</div>
			<Form />
			<Suspense fallback={<div>Loading...</div>}>
				<UrlList />
			</Suspense>
		</div>
	);
}
