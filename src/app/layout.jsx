import Navbar from "@/components/NavBar";
import "./globals.css";
// import "@/app/globals.css"
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
	title: "CuyAnimeList",
	description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${gabarito.className} bg-color-dark`}
				suppressHydrationWarning={true}
			>
				{/* <div>TESTING</div> */}
				<Navbar />
				{children}
			</body>
		</html>
	);
}
