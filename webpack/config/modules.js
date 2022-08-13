const path = require("path");
// 將 css 取出來加到打包完的 html 內。
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// css-loader 解析 css 檔案內的 @import 及 url()。
// postcss-loader，透過 postcss 來處理你的 css-loader。
const cssLoader = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
};

const sassLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader",
    "sass-loader",
  ],
};

const imageLoader = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
  parser: {
    dataUrlCondition: {
      // 小於 10 kb 會被轉成 base64
      maxSize: 10 * 1024, // 10 kb
    },
  },
  generator: {
    filename: "image/[hash][ext][query]",
  },
};

// 使用 babel 加載 ES2015+ 的程式，並將其轉為ES5 的版本。
const babelLoader = {
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  use: {
    loader: "babel-loader",
  },
  exclude: path.resolve("node_modules"),
};

module.exports = {
  cssLoader,
  sassLoader,
  imageLoader,
  babelLoader,
};
