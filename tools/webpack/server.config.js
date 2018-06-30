const path = require('path')

module.exports = {
  target: 'node',
  entry: {
    server: './src/server.ts',
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: './tools/typescript/tsconfig.server.json',
            },
          },
        ],
      },
    ],
  },
}
