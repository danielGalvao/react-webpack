
const webpack = require('webpack');

module.exports = {
    entry: './app/App.js',
    output: {
        path: __dirname+'/public',
        filename: './bundle.js'
    },
    devServer: {
      port: 8080,
      contentBase: './public'
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { presets: ['es2015','react'] }
          }],
      },
      {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
      }],
    },
}
