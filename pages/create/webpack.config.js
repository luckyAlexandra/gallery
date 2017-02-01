var path = require('path');
module.exports = {
  entry: "./src/create.js",
  output: {
    path: __dirname,
    filename: "./dist/create.js"
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