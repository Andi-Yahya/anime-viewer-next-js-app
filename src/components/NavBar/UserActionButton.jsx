import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
	const user = await authUserSession();
	// console.log("variabel user", user.name);
	const actionLabel = user ? "Sign Out" : "Sign In";
	const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
	return (
		<div className="flex gap-2 justify-between">
			{user ? <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null}
			<Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12 inline-block rounded-full">{actionLabel}</Link>
		</div>
	);
};

export default UserActionButton;
