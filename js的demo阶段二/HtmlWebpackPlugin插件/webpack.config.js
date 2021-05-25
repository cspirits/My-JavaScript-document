/*
 * @Date: 2021-05-25 17:32:47
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-25 21:43:38
 * @FilePath: \webpack插件HtmlWebpackPlugin\webpack.config.js
 */
var HtmlWebpackPlugin = require('html-webpack-plugin'); //导入插件
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html' //模板文件
    })]
};