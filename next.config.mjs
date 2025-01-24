/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // output: 'export',
  basePath:"",
 async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
    ]
  },
 
};

export default nextConfig;
