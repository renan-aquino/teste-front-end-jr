/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
      additionalData: `@use "@/utilities/variables.scss" as *;`,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'app.econverse.com.br',
        }
      ],
    },
};

export default nextConfig;
