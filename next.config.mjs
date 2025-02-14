/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath:"",
 
  async rewrites(){
    return[
      {
        source: "/:slug((?!blog|property).*)",
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
