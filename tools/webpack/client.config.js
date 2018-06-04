const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const isDevelopment = process.env.NODE_ENV === "development";
const devServer = {
  host: "http://127.0.0.1",
  port: 3355
};

const baseConfig = {
  entry: {
    client: "./src/client.tsx"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./public/assets/js")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: "./tools/typescript/tsconfig.client.json"
            }
          }
        ]
      }
    ]
  }
};
const devConfig = {
  entry: {
    "hot-loader": [
      "react-hot-loader/patch",
      `webpack-dev-server/client?${devServer.host}:${devServer.port}`,
      "webpack/hot/only-dev-server"
    ]
  },
  output: {
    publicPath: `${devServer.host}:${devServer.port}/`
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./public/assets/js"),
    port: devServer.port,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
const prdConfig = {};

module.exports = merge(baseConfig, isDevelopment ? devConfig : prdConfig);
