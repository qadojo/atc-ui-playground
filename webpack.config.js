const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/ui/index.js",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    contentBase: "./dist",
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        pathRewrite: { "^/api": "" },
      },

      "favicon.ico": "http://localhost:3001/favicon.ico",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/ui/index.html",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
