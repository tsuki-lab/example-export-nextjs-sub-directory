const isProd = process.env.NODE_ENV === 'production'
const prefixPath = isProd ? '/example-export-nextjs-sub-directory' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: prefixPath,
  basePath: prefixPath,
  reactStrictMode: true,
}

module.exports = nextConfig
