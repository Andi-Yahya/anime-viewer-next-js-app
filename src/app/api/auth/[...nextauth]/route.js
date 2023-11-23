import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

// export const cetak = () => {
//     return "yes";
// };
export const authOption = {
	providers: [
		githubAuth({
			clientId: process.env.GITHUB_CLIENT,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOption);


export { handler as GET, handler as POST };
