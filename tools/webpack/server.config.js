const path = require("path");

const env = process.env.NODE_ENV || "development";
const isDevelopment = env === "development";

module.exports = {
  target: "node",
  entry: {
    server: "./src/server.js"
  },
  output: {
    path: path.join(__dirname, "../../dist"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
