const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

module.exports = (env, argv) => {
  if (!argv.mode) {
    throw new Error('You must pass an --mode flag into your build for webpack to work!');
  }

  process.env.BABEL_ENV = argv.mode;
  process.env.NODE_ENV = argv.mode;

  const envConfig = require(`./webpack/webpack.${argv.mode}.js`);

  return webpackMerge(commonConfig(env, argv), envConfig);
};
