/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: process.env.NEXT_PUBLIC_IMAGE_DOMAINS
            ? process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(",").map((domain) => ({
                protocol: "https",
                hostname: domain,
            }))
            : [],
    },
};

export default nextConfig;
