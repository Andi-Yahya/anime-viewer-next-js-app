"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = (event) => {
		// console.log(event)
		const keyword = searchRef.current.value;
		if (!keyword || keyword.length < 3 || keyword.trim() == "") return;
		event ? event.preventDefault() : null;
		router.push(`/search/${keyword}`);
	};
	return (
		<div className="relative">
			<input
				placeholder="cari anime..."
				className="w-full  p-2 rounded "
				ref={searchRef}
				onKeyDown={(e) => {
					if (e.key === "Enter" && e.target.value) {
						handleSearch();
					}
				}}
			/>
			<button className="absolute top-2 end-2" onClick={handleSearch}>
				<MagnifyingGlass size={24} />
			</button>
		</div>
	);
};

export default InputSearch;
