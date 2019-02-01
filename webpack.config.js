const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");


const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'webpack-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      "/api": "http://localhost:3000"
    },
    publicPath: '/',
    setup(app) {
      app.post('*', (req, res) => {
        res.redirect(req.originalUrl);
      });
    },
  },
  plugins: [new CleanWebpackPlugin(['build']), htmlWebpackPlugin]
};