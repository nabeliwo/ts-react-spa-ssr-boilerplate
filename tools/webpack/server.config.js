const path = require("path");
const nodeExternals = require("webpack-node-externals");

const env = process.env.NODE_ENV || "development";
const isDevelopment = env === "development";

module.exports = {
  target: "node",
  devtool: isDevelopment ? "source-map" : false,
  entry: {
    server: "./src/server.ts"
  },
  output: {
    path: path.join(__dirname, "../../dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: "./tools/typescript/tsconfig.server.json"
            }
          }
        ]
      }
    ]
  },
  externals: [nodeExternals()]
};
