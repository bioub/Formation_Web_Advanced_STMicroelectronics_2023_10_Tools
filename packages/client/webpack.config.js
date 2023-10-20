/* eslint-disable */
const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BannerPlugin } = require('webpack');
const json5 = require('json5');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function createConfig(_, { mode }) {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: mode === 'development' ? 'source-map' : false,
    entry: './src/main.ts',
    output: {
      clean: true,
      path: path.resolve(__dirname, '../../dist/client'),
      filename: mode === 'development' ? 'bundle.js' : 'bundle.[contenthash].js',
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js'],
      // Add support for TypeScripts fully qualified ESM imports.
      extensionAlias: {
        '.js': ['.js', '.ts'],
        '.cjs': ['.cjs', '.cts'],
        '.mjs': ['.mjs', '.mts'],
      },
    },
    module: {
      rules: [
        // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
        { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
        { test: /\.json5$/, type: 'json', parser: { parse: json5.parse } },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new BannerPlugin('Copyright STMicroelectronics ' + new Date().getFullYear()),
      new MiniCssExtractPlugin(),
    ],
  };

  return config;
}

module.exports = createConfig;
