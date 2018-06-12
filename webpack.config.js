const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'app/index.html'), // Location of source index.html
  filename: 'index.html' // Name of produced index.html
})

module.exports = {
  entry: path.resolve(__dirname, 'app'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          }, // creates style nodes from JS strings
          {
            loader: 'css-loader'
          }, // translates CSS into CommonJS
          {
            loader: 'sass-loader'
          } // compiles Sass to CSS
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    htmlPlugin
  ]
}
