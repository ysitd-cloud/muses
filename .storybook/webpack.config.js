const utils = require('./utils');

module.exports = (config, _, defaultConfig) => {
  defaultConfig.module.rules = defaultConfig.module.rules.concat(utils.styleLoaders({ sourceMap: true }));
  return defaultConfig;
};
