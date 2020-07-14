const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist1')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // to load scss sass file, should add sass-loader and node-sass package
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    devServer: {
        hot: true,
        contentBase: './dist1'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // this index.html means the index.html in the root folder
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

const config = {
  
}

module.exports = config