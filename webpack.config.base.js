const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // 可以不写 默认是dist
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'ly-app',
        template: './src/assets/index.html'
    })
  ],
  module: {
    rules: [
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'],
          },
        {
            test: /\.styl$/,
            loader: ["style-loader","css-loader","stylus-loader"], // compiles Styl to CSS
        },
        {
            test: /\.less$/i,
            loader: ["style-loader","css-loader","less-loader"], // compiles Less to CSS
        },
      {   
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
                implementation: require('dart-sass'),
                
            },
          },
        ],
      },
    ],
  },
};