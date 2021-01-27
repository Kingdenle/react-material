const path = require('path');
const webpack = require('webpack');



/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');




const HtmlWebpackPlugin = require('html-webpack-plugin')




/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

const WorkboxWebpackPlugin = require('workbox-webpack-plugin');




module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',      // 打包后的文件名称
    path: path.resolve('dist')  // 打包后的目录，必须是绝对路径
  },
  mode: 'development',
  devServer: {
    port: 3000,             // 端口
    open: true,             // 自动打开浏览器
    hot: true,               // 开启热更新
    overlay: true, // 浏览器页面上显示错误
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: 'main.[contenthash].css' }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: true
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: false,
    })
  ],

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader"
        }
      },
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-object-rest-spread",
            ]
          }
        }
      },
      {
        test: /.(sa|sc|c)ss$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: "css-loader",

            options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader",

            options: {
              sourceMap: true
            },
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // modules: true
            }
          }
          // 'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/"
          }
        }
      }
    ]
  },

  devServer: {
    open: true,
    host: 'localhost'
  }
}