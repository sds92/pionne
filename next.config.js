/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.{ts,tsx}/,
  //     use:
  //   })
  //   return config;
  // },
  nextConfig,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // loader: 'custom',
  },
};
