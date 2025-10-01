/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000",
			},
		],
		unoptimized: process.env.NODE_ENV === "development",
	},
	experimental: {
		serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
	},
};

module.exports = nextConfig;
