// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './asset/loader.js',
  },
};
  
  module.exports = nextConfig;