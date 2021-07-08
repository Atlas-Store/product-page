const webpack = require('webpack');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

const SRC_DIR = path.join(__dirname, './client/src');
const DIST_DIR = path.join(__dirname, './client/dist');

const config = {
  mode: 'production',
  entry: [
    `${SRC_DIR}/index.jsx`,
  ],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  // plugins: [
  //   new CompressionPlugin({
  //   filename: '[path].gz[query]',
  //   algorithm: 'gzip',
  //   test: /\.(js|css|html|svg)$/,
  //   threshold: 8192,
  //   minRatio: 0.8
  //   }),
  //   new BrotliPlugin({ //brotli plugin
  //     asset: '[path].br[query]',
  //     test: /\.(js|css|html|svg)$/,
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })
  // ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {},
  },
  devServer: {
    contentBase: './dist',
  },
};

module.exports = config;
