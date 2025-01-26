import Form from "@/app/components/Form";
import UrlList from "@/app/components/url-list/UrlList";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<div
				className={
					"w-full h-full min-h-fit flex flex-col content-center items-center overflow-clip sm:py-32 mx-auto my-0"
				}
			>
				<div
					className={
						"w-full h-full flex flex-col content-center items-center justify-center b-100"
					}
				>
					<div className={"max-w-3xl"}>
						<h1 className="font-bold pb-8 text-4xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
							SnipURL
						</h1>
						<p className="font-semibold text-sm sm:text-base pb-6 px-8 text-center">
							Effortlessly shorten your URLs and share them anywhere. SnipURL
							makes link sharing simple, fast, and effective.
						</p>
					</div>
					<Form />
				</div>
				<Suspense fallback={UrlListLoading()}>
					<UrlList />
				</Suspense>
			</div>
		</>
	);
}

function UrlListLoading() {
	return null;
}
