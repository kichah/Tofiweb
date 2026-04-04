/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '3mb', // Sets the limit to 3 Megabytes
        },
    },
};
export default nextConfig;
