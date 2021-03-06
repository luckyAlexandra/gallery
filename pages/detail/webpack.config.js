var path = require('path');
module.exports = {
  entry: "./src/detail.js",
  output: {
    path: __dirname,
    filename: "./dist/detail.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'es6'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}