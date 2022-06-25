/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TATUM_MAINNET_API_KEY: process.env.TATUM_MAINNET_API_KEY,
  },
};

module.exports = nextConfig;
