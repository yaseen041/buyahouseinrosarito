/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
 

 
};

export default nextConfig;
