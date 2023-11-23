import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const page = async ({ params: { id } }) => {
	// const { id } = params;
	const anime = await getAnimeResponse(`anime/${id}`);
	// console.log(anime.data);
	const toCapital = anime.data.title;
	return (
		<>
			<div className="pt-4 px-4">
				<h3 className=" text-color-primary">
					<span className="text-color-accent">JUDUL :</span>
					{` " ${toCapital.toUpperCase()} "`} - {anime.data.year}{" "}
				</h3>
			</div>
			<div className="border-r-8 border-color-dark pt-4 px-2 flex gap-2 text-color-primary overflow-auto">
				<div className=" p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
					<h3 className="text-color-accent">PERINGKAT</h3>
					<p>#{anime.data.rank}</p>
				</div>
				<div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
					<h3 className="text-color-accent">SKOR</h3>
					<p>{anime.data.score}</p>
				</div>
				<div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
					<h3 className="text-color-accent">ANGGOTA</h3>
					<p>{anime.data.members}</p>
				</div>
				<div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
					<h3 className="text-color-accent">EPISODE</h3>
					<p>{anime.data.episodes}</p>
				</div>
				<div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
					<h3 className="text-color-accent">POPULARITAS</h3>
					<p>{anime.data.popularity}</p>
				</div>
				<div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
					<h3 className="text-color-accent">DURASI</h3>
					<p>{anime.data.duration}</p>
				</div>
				<div className="w-36 p-2 flex flex-col justify-center items-center rounded border border-color-primary">
					<h3 className="text-color-accent">TIPE TAYANGAN</h3>
					<p>{anime.data.type}</p>
				</div>
			</div>
			<div className="pt-4 px-4 flex gap-2 sm:flex-nowrap 		flex-wrap text-color-primary">
				<Image
					src={anime.data.images.webp.image_url}
					alt={anime.data.images.jpg.image_url}
					width={250}
					height={250}
					className="w-full rounded object-cover"
				/>
				<p className="text-justify text-xl">{anime.data.synopsis}</p>
			</div>
			<div>
				<VideoPlayer
					animeName={anime.data.title}
					youtubeId={anime.data.trailer.youtube_id}
				/>
			</div>
		</>
	);
};

export default page;
