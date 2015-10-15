var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = {
  entry: {
    'app': path.resolve(__dirname, 'client/main.js')
  },
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', sourceMap: true}
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};

if(process.env.NODE_ENV !== 'production') {
  config.devtool = 'source-map';
  config.debug = true;
}

module.exports = config;
