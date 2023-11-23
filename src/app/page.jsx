import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
	// const response = await fetch(
	// 	`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
	// );
	// const topAnime = await response.json();
	// console.log(anime.pagination)

	const topAnime = await getAnimeResponse("top/anime", "limit=8");
	let recommendedAnime = await getNestedAnimeResponse(
		"recommendations/anime",
		"entry"
	);
	// console.log('ini recommendedAnime')
	// console.log(recommendedAnime)
	// const mathA = Math.ceil(Math.random() * 200 + 1);
	// const mathB = Math.ceil(Math.random() * 200 + 1);
	// const mathA = 30;
	// const mathB = 10;
	// if (mathA - mathB < 8 && mathA - mathB > 0) {
	// 	recommendedAnime = {
	// 		data: recommendedAnime.slice(0, 8),
	// 	};
	// } else if (mathA - mathB < 8) {
	// 	console.log("kurang dari 8");
	// 	recommendedAnime = {
	// 		data: recommendedAnime.slice(mathA, mathB),
	// 	};

	// } else if (mathA - mathB > 8) {
	// 	console.log("horee");
	// 	recommendedAnime.slice(90, 99).push();
	// 	recommendedAnime.slice(0,8);
	// 	console.log(recommendedAnime)
	const random1 = 'x'
	const random2 = 'y'
	recommendedAnime = reproduce(recommendedAnime, 8)
	// console.log(test)
	
	// recommendedAnime = {
	// 	data: recommendedAnime.slice(random1, random2),
	// };
	// }

	// console.log(mathA);
	// console.log(mathB);
	// console.log("hasil :", mathA - mathB);
	return (
		<>
			<section>
				<Header
					title="Paling Populer"
					linkTitle="Lihat Semua"
					linkHref="/populer"
				/>
				<AnimeList api={topAnime} />
			</section>

			<section>
				<Header title="Rekomendasi" />
				<AnimeList api={recommendedAnime} />
			</section>
		</>
	);
};
export default Page;
