module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.entry = './src/index.js';
        return webpackConfig;
      },
    },
  };