const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "cookie",
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      appMountId: "app",
      filename: "index.html",
      template: "example/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
};

module.exports = config;
