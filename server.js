var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

// ./node_modules/.bin/webpack-dev-server --progress --colors --no-info
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  progress: true,
  noInfo: true,
  colors: true,
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('WebpackDevServer listening at http://localhost:3000/');
});