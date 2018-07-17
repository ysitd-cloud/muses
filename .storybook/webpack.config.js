const utils = require('./utils');
const options = require('./vue-loader.conf');

module.exports = (config, _, defaultConfig) => {
  defaultConfig.devtool = 'source-map';
  defaultConfig.module.rules[1].options = options;
  defaultConfig.module.rules = defaultConfig.module.rules.concat(utils.styleLoaders({ sourceMap: true }));
  return defaultConfig;
};
