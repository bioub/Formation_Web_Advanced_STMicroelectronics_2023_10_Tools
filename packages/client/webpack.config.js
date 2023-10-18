const path = require('node:path');

/** @type {import('webpack').Configuration} */
const config = {
  entry: './main.ts',
  output: {
    clean: true,
    path: path.resolve(__dirname, '../../dist/client'),
    filename: 'main.js'
  }
};


module.exports = config;
