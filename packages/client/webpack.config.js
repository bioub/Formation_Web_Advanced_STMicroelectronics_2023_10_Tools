const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BannerPlugin } = require('webpack');
const json5 = require('json5');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
const config = {
  devtool: false,
  entry: './src/main.ts',
  output: {
    clean: true,
    path: path.resolve(__dirname, '../../dist/client'),
    filename: 'bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
     ".js": [".js", ".ts"],
     ".cjs": [".cjs", ".cts"],
     ".mjs": [".mjs", ".mts"]
    }
  },
  module: {
    rules: [
      // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.json5$/, type: 'json', parser: { parse: json5.parse } }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new BannerPlugin('Copyright STMicroelectronics ' + (new Date).getFullYear()),
    new MiniCssExtractPlugin(),
  ]
};


module.exports = config;
