var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './entry.js',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader'], exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {hot: true},
};