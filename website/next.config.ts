// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  basePath: "/cs3042-project",
  assetPrefix: "/cs3042-project/",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
}
 
module.exports = nextConfig
