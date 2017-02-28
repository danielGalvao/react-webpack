const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './app/App.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
        new OptimizeCssAssetsPlugin()
    ],
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
          loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }],
    },
}
