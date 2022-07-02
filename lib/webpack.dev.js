const { merge } = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base');

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
    compress: false,
    static: {
      directory: path.join(process.cwd(), 'dist'),
      publicPath: '/',
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    stats: 'errors-only',
  },
  devtools: 'cheap-source-map',
};
module.exports = merge(baseConfig, devConfig);
