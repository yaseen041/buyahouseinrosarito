/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  basePath:"/elrealestate",
 async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
    ]
  }
};

export default nextConfig;
