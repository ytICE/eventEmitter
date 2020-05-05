var path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'event-emitter.js',
    library: 'EventEmitter',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {},
      },
    ],
  },
}
