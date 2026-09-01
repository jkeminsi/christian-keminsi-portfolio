/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? '/christian-keminsi-portfolio' : (process.env.NEXT_PUBLIC_BASE_PATH || '');

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
