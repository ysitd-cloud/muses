const path = require('path');
const utils = require('./utils');

module.exports = (config, _, defaultConfig) => {
  defaultConfig.module.rules = defaultConfig.module.rules.concat(utils.styleLoaders({ sourceMap: true }));
  defaultConfig.module.rules.push({
    test: /\.stories\.js$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });
  return defaultConfig;
};
