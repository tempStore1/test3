const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssLoader = {
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
};

const imageLoader = {
  test: /\.(png|jpg|gif)$i/,
  type: "asset/resource",
};

const babelLoader = {
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  use: {
    loader: "babel-loader",
  },
  exclude: /node_modules/,
};

module.exports = {
  cssLoader,
  imageLoader,
  babelLoader,
};
