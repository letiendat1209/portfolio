/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatarfiles.alphacoders.com",
      },
    ],
  },
};

export default nextConfig;
