/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site keeps deploying to Netlify as plain files,
  // while every route now ships real server-rendered <head> metadata.
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Emit /blog/junior/index.html so clean, non-trailing-slash URLs resolve on a
  // static host and match the canonicals in src/seo/routes.js.
  trailingSlash: false,
  reactStrictMode: true,
  // circle-scroll ships an untranspiled `import "./style.css"`; let Next's
  // loaders handle it instead of Node's ESM loader during page-data collection.
  transpilePackages: ['circle-scroll'],
};

export default nextConfig;
