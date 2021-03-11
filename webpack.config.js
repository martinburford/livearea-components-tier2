// Global node imports
const webpackMerge = require("webpack-merge");

// Webpack configuration
const baseConfig = require("./webpack.base");
const devServerConfig = require("./webpack.devserver.config");

module.exports = () => {
  const environment = process.env.NODE_ENV;

  console.log(`[webpack.config.js]: environment=${environment}`);

  switch (environment) {
    case "devserver":
      webpackConfig = webpackMerge(baseConfig, devServerConfig);
      break;
  }

  console.log("[webpack.config.js]: webpackConfig...");
  console.log(webpackConfig);

  return webpackConfig;
};
