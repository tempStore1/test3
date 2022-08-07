const path = require("path");
// 合併不同配置
const { merge } = require("webpack-merge");
// 讓 Webpack 能讀取到 .env 全域變數配置檔案
const Dotenv = require("dotenv-webpack");
// 視覺化打包分析工具
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
// config
const modules = require("./config/modules");
const plugins = require("./config/plugins");
const resolve = require("./config/resolve");

const config = {
  mode: "development",
  entry: "src/index.tsx",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    // 打包後使用 BrowserRouter 才不會掛掉
    publicPath: "/",
    clean: true,
  },
  devtool: "inline-source-map",
  // 只有開發模式有用。需先安裝 webpack-dev-server
  devServer: {
    port: 3000,
    // 在本地使用 BrowserRouter 才不會掛掉
    historyApiFallback: true,
  },
  module: {
    rules: [modules.cssLoader, modules.imageLoader, modules.babelLoader],
  },
  // 快取。提升打包速度，會緩存在 node_modules 內。
  cache: {
    type: "filesystem", // 為了做其他配置
  },
  // dev 專屬的 plugins
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
