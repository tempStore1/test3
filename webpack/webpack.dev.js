const path = require("path");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const modules = require("./config/modules");
const plugins = require("./config/plugins");
const resolve = require("./config/resolve");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const config = {
  mode: "development",
  entry: "src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js",
    // 打包後使用 BrowserRouter 才不會掛掉
    publicPath: "/",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    // 在本地使用 BrowserRouter 才不會掛掉
    historyApiFallback: true,
  },
  module: {
    rules: [modules.cssLoader, modules.imageLoader, modules.babelLoader],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    new Dotenv({
      path: "../.env",
    }),
  ],
};

module.exports = merge(config, plugins, resolve);
