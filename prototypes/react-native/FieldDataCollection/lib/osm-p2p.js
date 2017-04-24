const level = require('react-native-level');
const hyperlog = require('hyperlog');
const osmdb = require('osm-p2p-db');

module.exports = function osmp2p (opts) {
  if (!opts) opts = {};
  const logdb = level(opts.logName || 'log');
  const log = hyperlog(logdb, { valueEncoding: 'json' });

  return osmdb({
    log: log,
    db: level(opts.indexName || 'index')
  });
};
