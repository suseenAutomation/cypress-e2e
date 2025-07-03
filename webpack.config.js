const path = require('path');

module.exports = {
  mode: 'development',
  entry: './cypress/support/index.ts', // Entry point for your TypeScript files
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve both TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader', // Use ts-loader to handle TypeScript files
        exclude: /node_modules/,
      },
    ],
  },
};