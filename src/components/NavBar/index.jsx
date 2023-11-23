import Link from "next/link";
import InputSearch from "./inputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
	return (
		<header className="bg-color-accent">
			<div className="flex md:flex-row flex-col justify-between p-4 gap-2 items-center">
				<Link href="/" className="font-bold text-2xl md:items-center">
					ANIMELIST by Andi
				</Link>
				<InputSearch />
				<UserActionButton/>
			</div>
		</header>
	);
};

export default Navbar;
