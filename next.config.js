/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "prospera.or.id",
      "images.unsplash.com",
      "cdn.rareblocks.xyz",
      "landingfoliocom.imgix.net",
      "prosperadevbucket.s3.ap-southeast-1.amazonaws.com",
      "newsletter.prospera.or.id",
      "cdn.tailgrids.com",
    ],
  },
};

module.exports = nextConfig;
