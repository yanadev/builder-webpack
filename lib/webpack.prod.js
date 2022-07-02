const { merge } = require('webpack-merge');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const baseConfig = require('./webpack.base');


const prodConfig = {
  mode: 'production',
  /* 设置提取的公共文件包的大小 */
  optimization: {
    /* 压缩 css */
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ],
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
  },
  plugins: [

    /* 速度优化: 引入基础包的 cdn */
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://unpkg.com/react@18/umd/react.development.js',
          global: 'React',
        },
        {
          module: 'react-dom',
          entry: 'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
          global: 'ReactDOM',
        },
      ],
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
