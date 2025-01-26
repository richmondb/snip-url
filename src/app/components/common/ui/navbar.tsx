import SignoutComponent from "@/app/components/auth/signout/page";
import { isSession } from "@/lib/schema/server";
import Link from "next/link";

async function Navbar() {
	const session = await isSession();

	// console.log("thissession", session?.session);
	return (
		<nav
			className={
				"w-full fixed top-0 left-0 right-0 flex px-6 py-8 items-center justify-center bg-transparent backdrop-blur-sm z-50"
			}
		>
			<div
				className={
					"w-full max-w-[1920px] flex items-center justify-between sm:px-4 lg:px-16"
				}
			>
				<Link
					href="/"
					className="roboto-regular text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-2xl md:text-4xl font-bold"
				>
					<span>SnipURL</span>
				</Link>
				<div className={""}>
					{!session?.session ? (
						<div className={"flex gap-4 items-center"}>
							<a
								href={"/auth/signin"}
								className={
									'className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-lg/3 font-semibold text-white shadow-inner"'
								}
							>
								Sign In
							</a>
							<a
								href={"/auth/signup"}
								className={
									'className="inline-flex items-center gap-2 rounded-md bg-transparent py-1.5 px-3 text-lg/3 font-semibold text-white shadow-inner"'
								}
							>
								Sign Up
							</a>
						</div>
					) : (
						<SignoutComponent />
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
