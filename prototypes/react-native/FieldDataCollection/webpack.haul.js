const webpack = require('webpack');

module.exports = ({ platform }, defaults) => ({
  entry: `./index.${platform}.js`,
  resolve: {
    ...defaults.resolve,
    plugins: [...defaults.resolve.plugins],
    alias: {
      fs: 'react-native-level-fs'
    }
  },
  module: {
    ...defaults.module,
    rules: [
      ...defaults.module.rules,
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react-native']
          }
        }
      },
      {
        loader: 'transform-loader?brfs',
        enforce: 'post'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        transforms: [
          function (file) {
            return through(function (buf) {
              this.queue(buf.split('').map(function (s) {
                return String.fromCharCode(127 - s.charCodeAt(0));
              }).join(''));
            }, function () { this.queue(null); });
          }
        ]
      }
    })
  ]
});
