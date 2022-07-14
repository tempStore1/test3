const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[hash].js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif)$i/,
        type: "asset/resource",
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.[hash].css",
    }),
  ],
};
