// create a webpack configuration with all common parts included here
var createWebpackConfig = function(options) {
  return {
    entry: options.entry,
    output: options.output,
    plugins: options.plugins,
    node: {
      fs: 'empty', // Because of jsrsasign usage of fs
      buffer: 'empty',
    },
      module: {
          loaders: [
              {
                  test: /\.js$/,
                  loader: 'babel-loader',
                  query: {
                      presets: ['es2015']
                  }
              }
          ]
      },
    // this is for the sourcemaps
    devtool: options.devtool
  };
};

module.exports = createWebpackConfig;
