"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
	return (
		<div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
			<div className="flex flex-row gap-4 items-start">
				<FileSearch size={44} className="text-color-accent " />
				<div className="flex justify-center items-center gap-1 flex-col ">
					<h3 className="text-color-accent text-2xl font-bold ">
						404 || NOT FOUND
					</h3>
					<Link
						href="/"
						className="text-color-primary hover:text-color-accent transition-all hover:underline"
					>
						Back
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Page;
