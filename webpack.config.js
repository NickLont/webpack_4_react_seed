const path = require("path")
const dotenv = require("dotenv-webpack")
const dotenvPlugin = new dotenv()
const htmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new htmlWebPackPlugin({
  template: path.resolve(__dirname, "app/index.html"), // Location of source index.html
  filename: "index.html" // Name of produced index.html
})
const copyWebpackPlugin = require("copy-webpack-plugin")
const copyPlugin = new copyWebpackPlugin(
  [
    {
      from: path.resolve(__dirname, "app/assets/images/"),
      to: path.resolve(__dirname, "dist/assets/images/")
    },
    {
      from: path.resolve(__dirname, "app/assets/fonts"),
      to: path.resolve(__dirname, "dist/assets/fonts")
    },
    {
      from: path.resolve(__dirname, "app/assets/various"),
      to: path.resolve(__dirname, "dist/assets/various")
    }
  ],
  {}
) // Manual copy of assets to avoid importing in evey component (not optimal for Webpack)

const webpackConfig = {
  entry: path.resolve(__dirname, "app"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        loaders: [
          "style-loader",
          // creates style nodes from JS strings
          "css-loader",
          // translates CSS into CommonJS
          "sass-loader"
          // compiles Sass to CSS
        ]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/images/",
              limit: 20000
            }
          }
        ] // dynamic loading of imported images
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts/"
            }
          }
        ] // dynamic loading of imported fonts
      }
    ]
  },
  plugins: [htmlPlugin, copyPlugin, dotenvPlugin],
  resolve: {
    modules: [path.resolve("./app"), path.resolve("./node_modules")]
  }, // Path resolver to make relative imports available (assets/images instead of ../assets/images)
  devServer: {
    port: 8003
  } // Port webpack serves to
}

module.exports = webpackConfig
