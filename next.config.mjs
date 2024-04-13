/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'medease.s3.amazonaws.com', // Corrected hostname
            },
        ]
    }
};

export default nextConfig;
