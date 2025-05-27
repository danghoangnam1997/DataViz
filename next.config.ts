import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export', // For static site generation
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Required for static export if using next/image default loader with external URLs
    // or if image optimization is not available on the hosting platform.
    // For GitHub Pages, if you don't configure a custom loader, this might be needed.
    // unoptimized: true, 
  },
};

export default nextConfig;
