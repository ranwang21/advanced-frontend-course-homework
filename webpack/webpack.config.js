const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  optimization: {
    // terser to minify js; optimizeCss.. to minimize css
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    // path.join() 去拼接路径
    // __dirname 当前文件的绝对路径
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        // sass-loader node-sass两个依赖都需要安装
        test: /\.(scss|sass)$/,
        // replace style loader with minicss...
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  // 相当于给了浏览器一个runner，webpack可以让浏览器刷新
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.HotModuleReplacementPlugin(),
    // will delete all mannually added files in dist folder
    new CleanWebpackPlugin(),
    // helps copying static files to dist
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'assets'),
        to: 'assets'
      }
    ]),
    // 把css提取出来，单独放在一个文件里面去引入到html里面
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
}

module.exports = config