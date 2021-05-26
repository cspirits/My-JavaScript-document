/*
 * @Date: 2021-05-26 10:17:46
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-26 10:36:31
 * @FilePath: \js的demo阶段二\webpack处理css\webpack.config.js
 */
var HtmlWebpackPlugin = require('html-webpack-plugin'); //导入插件
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            // loader: 'css-loader' //虽然识别了，但是无法处理这种css文件，还需要其他的功能
            use: ['style-loader', 'css-loader'] //多个loader的时候使用use数组的形式，但是执行顺序是从右向左的方式
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html' //模板文件
    })]
};