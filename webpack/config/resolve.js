// 用來加載 tsconfig
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@/assets": path.resolve(__dirname, "../../src/assets"),
      "@/components": path.resolve(__dirname, "../../src/components"),
      "@/epics": path.resolve(__dirname, "../../src/epics"),
      "@/features": path.resolve(__dirname, "../../src/features"),
      "@/hooks": path.resolve(__dirname, "../../src/hooks"),
      "@/middleware": path.resolve(__dirname, "../../src/middleware"),
      "@/pages": path.resolve(__dirname, "../../src/pages"),
      "@/reducers": path.resolve(__dirname, "../../src/reducers"),
      "@/resource": path.resolve(__dirname, "../../src/resource"),
      "@/router": path.resolve(__dirname, "../../src/router"),
      "@/store": path.resolve(__dirname, "../../src/store"),
      "@/utils": path.resolve(__dirname, "../../src/utils"),
    },
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
};
