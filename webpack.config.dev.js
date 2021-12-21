//developing configuration

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const TercerPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


const Dotenv = require("dotenv-webpack");



module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@style": path.resolve(__dirname, "src/style"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/img"),
          to: "assets/img",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "style/[name].[contenthash].css",
    }),
    new Dotenv(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: false,
    minimizer: [
      new CssMinimizerPlugin(),
      new TercerPlugin(),
      new HtmlMinimizerPlugin(),
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    open: true,
    historyApiFallback: true,
    port: 3001,
  },
};
