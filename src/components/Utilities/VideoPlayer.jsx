"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId, animeName }) => {
	const [isOpen, setIsOpen] = useState(true);
	const handleVideoPlayer = () => {
		setIsOpen((prevState) => !prevState);
	};
	const option = {
		width: "300",
		height: "250",
        
	};  

	const Player = () => { 
		return (
			<div className="fixed bottom-1 right-4">
				<button
					className="bg-color-accent rounded-2xl float-right text-color-dark transition-all hover:bg-color-primary"
					onClick={handleVideoPlayer}
				>
					<XCircle size={32} />
				</button>
				<YouTube
					videoId={youtubeId}
					onReady={(event) => event.target.pauseVideo()}
					opts={option}
					onError={() => {
						setIsOpen(() => !isOpen);
						setTimeout(() => {
							alert(`MAAF TRAILER "${animeName}" TIDAK DAPAT DITEMUKAN :,)`);
						}, 100);
					}}
				/>
			</div>
		);
	};

	const ButtonOpenTrailer = () => {
		return (
			<button
				onClick={handleVideoPlayer}
				className="fixed bottom-5 right-5 w-32 hover:bg-color-primary bg-color-accent rounded-sm text-xl text-color-dark transition-all"
			>
				Tonton Trailer
			</button>
		);
	};
	return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
