/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      extractComments: false,
      terserOptions: {
        mangle: true,
        output: {
          comments: false,
        },
      },
    })],
  },
  output: {
    filename: '[name].[chunkhash].js',
    publicPath: '/babylon-game',
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images', to: 'images' },
      ],
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
};
