// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './asset/loader.js',
  },
};
  
  module.exports = nextConfig;