const path = require("path")
const dotenv = require("dotenv-webpack")
const dotenvPlugin = new dotenv()
const htmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new htmlWebPackPlugin({
  template: path.resolve(__dirname, "app/index.html"), // Location of source index.html
  filename: "index.html", // Name of produced index.html,
  chunksSortMode: "dependency" //Allows to control how chunks should be sorted before they are included to the html
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

const webpackDevConfig = {
  mode: "development",
  entry: {
    // We are telling webpack that we would like separate dependency graphs for each file here
    main: path.resolve(__dirname, "app") // optimally, there should be 1 file for each page of the app
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js" // When a new release goes out, the client will fetch the updated files while still using the cached version of the files that haven’t changed.
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
          "postcss-loader",
          // uses plugins defined in postcss.config.js , most important is autoprefixer
          "sass-loader"
          // compiles Sass to CSS
          // these loader arrays work bottom to top
        ]
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "postcss-loader", "css-loader"]
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

module.exports = webpackDevConfig