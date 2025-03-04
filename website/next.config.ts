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
  // This helps with GitHub Pages or other static hosting
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
}

export default nextConfig;