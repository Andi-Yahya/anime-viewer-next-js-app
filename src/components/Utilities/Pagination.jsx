// "use client";
import { useEffect, useState } from "react";

const Pagination = ({ page, lastPage, setPage }) => {
	const scrollTop = () => {
		scrollTo({
			behavior: "smooth",
			top: 0,
		});
	};
	// const [isZero, setIsZero] = useState(false);
	// useEffect(()=>{
	// 	setIsZero(true)
	// },[])

	const handleNextPage = () => {
		// setIsZero(false)
		setPage((prevState) => prevState + 1);
		scrollTop();
	};
	const handlePrevPage = () => {
		setPage((prevState) => {
			// if (prevState === 2) {
			// 	setIsZero(true);
			// }
			return prevState - 1;
		});
		scrollTop();
	};
	const iniLast = lastPage
	// console.log(iniLast)
	const handleLastPage = () => {
		!iniLast? null : 
		setPage( ()=> iniLast)
		// scrollTop();
	}
	// console.log(isZero)
	return (
		<div className="flex flex-col text-color-primary text-xl">
			<div className="flex gap-4 text-color-primary justify-center items-center py-4 px-2 text-3xl">
				{page <= 1 ? null : (
					<button
						onClick={handlePrevPage}
						// disabled={isZero}
						className="hover:text-color-accent font-bold transition-all"
					>
						Prev
					</button>
				)}
				<p>
					{page} of {lastPage}
				</p>

				{page >= lastPage ? null : (
					<button
						onClick={handleNextPage}
						className="hover:text-color-accent font-bold transition-all "
					>
						Next
					</button>
				)}
			</div>
			<button 
			onClick={handleLastPage} 
			className="hover:text-color-accent font-bold transition-all">Last Page</button>
		</div>
	);
};

export default Pagination;
