var path = require('path');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'static'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader', 'eslint-loader'], include: path.join(__dirname, 'src')},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader?modules', 'sass-loader']},
    ],
  },
  plugins: [],
};