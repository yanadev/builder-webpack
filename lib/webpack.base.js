const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const glob = require('glob');

const projectRoot = process.cwd();
/* /builder-webpack/test/smoke/template/ */

const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const url = path.join(projectRoot, '/src/*/index.jsx').replaceAll('\\', '/');
  const entryFiles = glob.sync(url);
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index.jsx/);
    const pageName = match && match[1];
    if (pageName) {
      entry[pageName] = entryFile;
      // 入口文件生成模板
      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          template: path.join(projectRoot, `/src/${pageName}/index.html`),
          filename: `${pageName}.html`,
          chunks: [pageName],
          inject: true,
          minify: {
            html5: true,
            collapseWhitespace: true,
            preserveLineBreaks: false,
            minifyCSS: true,
            minifyJS: true,
            removeComments: false,
          },
        }),
      );
    }
    return htmlWebpackPlugins;
  });

  return { entry, htmlWebpackPlugins };
};

const { entry, htmlWebpackPlugins } = setMPA();
console.log(entry);
module.exports = {
  entry: entry,
  output: {
    filename: '[name]_[hash:8].js',
    path: path.join(projectRoot, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif|ico)$/i,
        type: 'asset',
        generator: {
          filename: 'static/img/[name].[hash:7][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    /* 命令行信息显示优化 */
    new FriendlyErrorsWebpackPlugin(),
    /* 打包捕获 error */
    function doneErrorPlugin() {
      this.hooks.done.tap('done', (stats) => {
        if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
          process.exit(1);
        }
      });
    },
    /* CSS 提取成一个单独的文件 */
    new MiniCssExtractPlugin({
      filename: '[name]_[hash:8].css',
    }),
  ]
    .concat(htmlWebpackPlugins),
  resolve: {
    alias: {
      '@': path.join(projectRoot, '/'),
      '@server': path.join(projectRoot, '/server'),
      '@src': path.join(projectRoot, '/src'),
      '@comp': path.join(projectRoot, '/src/components'),
      '@images': path.join(projectRoot, '/src/assets/images'),
    }
  },
  stats: 'errors-only',
};
