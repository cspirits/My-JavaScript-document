/*
 * @Date: 2021-05-25 17:32:47
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-25 20:34:33
 * @FilePath: \js的demo阶段二\webpack初体验\webpack.config.js
 */

const path = require('path');

module.exports = {
    mode: 'development',
    // entry: './src/index.js', //entry指定的是入口文件
    entry: {
        main: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};