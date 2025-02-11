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
  async rewrites(){
    return[
      {
        source: "/:slug((?!blog).*)",
        destination: "/blog/:slug*"
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
