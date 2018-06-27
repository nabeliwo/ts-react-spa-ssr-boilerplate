const path = require("path");

const env = process.env.NODE_ENV || "development";
const isDevelopment = env === "development";

module.exports = {
  entry: {
    client: "./src/client.jsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../../public/assets/js")
  },
  devtool: isDevelopment ? "source-map" : false,
  resolve: {
    extensions: [".js", "jsx"]
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
