var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

module.exports = Object.assign({}, config, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: 'http://localhost:3000/static/',
    filename: 'bundle.js',
  },
  plugins: [].concat(config.plugins).concat([
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/), // removes all other languages from moment.js (en-gb|de|pl)
    new webpack.HotModuleReplacementPlugin()
  ]),
  devServer: {hot: true},
  devtool: 'eval'
});