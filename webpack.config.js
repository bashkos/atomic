const { resolve } = require('path');
const webpack = require('webpack');

const srcDir = resolve(__dirname, 'src');
const distDir = resolve(__dirname, 'dist');

module.exports = {
  context: distDir,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: distDir,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: distDir,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    alias: {
      '~components': resolve(srcDir, 'components'),
    },
  },
};
