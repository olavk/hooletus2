var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

module.exports = Object.assign({}, config, {
  plugins: [].concat(config.plugins).concat([
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/), // removes all other languages from moment.js (en-gb|de|pl)
    new webpack.optimize.OccurenceOrderPlugin(), // keeps hashes consistent between compilations
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'), // removes a lot of debugging code in React
      }
    }),
    // minifies
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]),
  devtool: 'source-map',
});