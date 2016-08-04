var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel!eslint-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'},
    ],
  },
};