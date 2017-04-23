var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OfflinePlugin = require("offline-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

const PROD = process.env.NODE_ENV === "production";

const CHUNK = process.env.NODE_ENV ? ".[chunkhash:8]" : "";

const PROD_PLUGINS = [
  new CleanWebpackPlugin(["dist"], { verbose: false }),
  new CopyWebpackPlugin([{ from: "public/" }]),
  new OfflinePlugin({
    ServiceWorker: {
      events: true,
      navigateFallbackURL: "/#/"
    },
    excludes: ["icons/*", "*.map"]
  })
];

module.exports = {
  entry: {
    app: "./src",
    vendor: "./src/vendor"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle" + CHUNK + ".js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
      minChunks: Infinity,
      filename: "[name]" + CHUNK + ".js"
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ].concat(PROD ? PROD_PLUGINS : []),
  devtool: PROD ? "source-map" : "cheap-module-eval-source-map",
  node: {
    fs: "empty",
    Buffer: false
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    historyApiFallback: true
  }
};
