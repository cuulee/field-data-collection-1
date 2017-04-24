module.exports = ({ platform }, defaults) => ({
  entry: `./index.${platform}.js`,
  resolve: {
    ...defaults.resolve,
    plugins: [...defaults.resolve.plugins],
    alias: {
      fs: 'react-native-level-fs'
    }
  }
});
