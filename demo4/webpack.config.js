const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    entry: {
        index: './src/index.js',
        // another: './src/another-module.js',
        // index: {
        //     import: './src/index.js',
        //     dependOn: 'shared',
        // },
        // another: {
        //     import: './src/another-module.js',
        //     dependOn: 'shared',
        // },
        // shared: 'lodash',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: 'main.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
};