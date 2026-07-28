/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '/Website' : '',
  assetPrefix: isGithubPages ? '/Website/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/Website' : '',
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
