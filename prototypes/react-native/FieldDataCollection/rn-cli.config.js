const blacklist = require('react-native/packager/blacklist');

module.exports = {

  /**
   * Add search paths to the packager. Equivalent to the
   * `--projectRoots` command line argument.
   *
   * Your app project directory is the default, but you can easily add
   * additional directories.
   *
   * This is very handy when you maintain all your software in one big
   * repo, which means your app's dependencies aren't necessarily just
   * located in `./node_modules` but potentially in sibling
   * directories or other locations.
   */
  getProjectRoots() {
    return [__dirname];
  },

  getAssetExts() {
    return [];
  },

  // add custom platforms to use filenames like .custom.js
  getPlatforms() {
    return [];
  },

  // make the packager ignore specific directories
  getBlacklistRE() {
    const additionalBlacklist = [];
    return blacklist(additionalBlacklist);
  },

  // transform modules
  getTransformModulePath() {
    return require.resolve('./transformer');
  },
};
