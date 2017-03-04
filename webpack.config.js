
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
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [{
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ['es2015','react'],
              plugins: ['transform-object-rest-spread']
            }
          }],
      },
      {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
      }],
    },
}
