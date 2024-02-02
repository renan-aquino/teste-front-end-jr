/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: `@use "@/utilities/variables.scss" as *;`,
      },
};

export default nextConfig;
