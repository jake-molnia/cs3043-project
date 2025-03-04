// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  basePath: "/cs3043-project",
  assetPrefix: "/cs3043-project/",
  output: "export",  // enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig;