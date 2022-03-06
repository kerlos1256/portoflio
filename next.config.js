/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodbUri: "mongodb://localhost:27017/next-",
  },
};

module.exports = nextConfig;
