const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const withLitSSR = require('@lit-labs/nextjs')();


const nextConfig = {
  output: 'standalone',
  compress: false,
  webpack(webpackConfig) {
    return {
      ...webpackConfig,
      devtool: 'inline-source-map',
      optimization: {
        minimize: false,
      },
    };
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

module.exports = withLitSSR(nextConfig);
