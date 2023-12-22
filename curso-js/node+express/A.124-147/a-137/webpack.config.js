const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontEnd/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
};
