/*
 * @Author: labixiaochen
 * @LastEditors: Tt's me too
 * @FirstEditTime: new Data()
 * @sayings: 质量编码,解决问题
 * @ObjectDescript: 
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