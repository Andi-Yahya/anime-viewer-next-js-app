/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "cdn.myanimelist.net",
			},
			{
				hostname: "avatars.githubusercontent.com",
			},
		],
		dangerouslyAllowSVG: true,
		// domains: ["placehold.co"],
	},
};

module.exports = nextConfig;
