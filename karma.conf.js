module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      // TODO: Set up Karma for use with pixi.js
      // 'public/lib/pixi.js',
      { pattern: 'tests.webpack.js', watched: false },
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['progress'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
      },
      resolve: {
        extensions: ['','.js']
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  });
};
