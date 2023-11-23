import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params: { keyword } }) => {
	// const { keyword } = params;
	const decodedKeyword = decodeURI(keyword);
	// const response = await fetch(
	// 	`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`
	// );
	// const searchAnime = await response.json();

	const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
	const capitalKeyword = decodedKeyword.toUpperCase();
	return (
		<>
			<section>
				<Header title={`Pencarian Untuk ${capitalKeyword}...`} />
				<AnimeList api={searchAnime} />
			</section>
		</>
	);
};
export default Page;
