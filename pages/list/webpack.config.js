var path = require('path');
module.exports = {
  entry: "./src/list.js",
  output: {
    path: __dirname,
    filename: "./dist/list.js"
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