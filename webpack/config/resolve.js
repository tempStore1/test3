// 用來加載 tsconfig
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      // __dirname 指的是當下檔案的絕對路徑，在這裡就是 resolve.js 的路徑。
      // 不過 path.resolve 指的就是使用絕對路徑，所以直接使用 src 就可以進行讀取的。
      "@": path.resolve("src"),
    },
    plugins: [new TsconfigPathsPlugin()],
    // 需要解析的文件類型
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    // 告訴 Webpack 哪個資料夾在解析的時候需要搜尋
    // src 優先度大於 node_modules
    modules: [path.resolve("src"), "node_modules"],
  },
};
