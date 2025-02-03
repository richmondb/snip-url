import Glasscard from "@/app/components/common/ui/card/glasscard";
import { getUrl } from "@/services/query";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function Page({ params }: { params: Promise<{ param: string }> }) {
	const param = (await params).param;

	const data = await getUrl(param);

	if (!data)
		return (
			<div className={"md:max-w-1/2"}>
				<Glasscard>
					<div className={"p-8 text-center justify-center"}>
						<p>
							The Url provided doesn&#39;t exist in our database and longer
							valid.
						</p>
						<p>Please double check your Link.</p>
						<br />
						<Link href={"/"} className={"underline underline-offset-4"}>
							Go Back Home
						</Link>
					</div>
				</Glasscard>
			</div>
		);

	if (data.short_code) {
		redirect(data.url);
	}

	return (
		<div className={"md:max-w-1/2"}>
			<Glasscard>
				<div className={"p-8 text-center justify-center"}>
					<p>
						The Url provided doesn&#39;t exist in our database and longer valid.
					</p>
					<p>Please double check your Link.</p>
					<br />
					<Link href={"/"} className={"underline underline-offset-4"}>
						Go Back Home
					</Link>
				</div>
			</Glasscard>
		</div>
	);
}

export default Page;
