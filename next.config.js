/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        FIREBASE_KEY: process.env.FIREBASE_KEY,
    },
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
};

module.exports = nextConfig;
