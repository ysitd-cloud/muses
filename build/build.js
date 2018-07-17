const webpack = require('webpack');
const shell = require('shelljs');
const config = require('./webpack.config');

process.env.NODE_ENV = 'production';

const assetsPath = './dist';

shell.rm('-rf', assetsPath);
shell.mkdir('-p', assetsPath);
shell.config.silent = true;

webpack(config, (err, stats) => {
  if (err) throw err;
  console.log(stats.toString({
    modules: true,
    children: true,
    chunks: true,
    chunkModules: true,
  }));
});
