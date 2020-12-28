const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 666
    },
    plugins: [
        // 如果不想在 watch 触发增量构建后删除 index.html 文件，可以在 CleanWebpackPlugin 中配置 cleanStaleWebpackAssets 选项 来实现
        // new CleanWebpackPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: '管理输出11',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

};