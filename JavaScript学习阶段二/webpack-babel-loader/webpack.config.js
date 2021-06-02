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
    entry: {
        index: './src/index.js', //entry指定的是入口文件
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' //这个属性想要实现[name]的话，就必须使用多入口的写法才可以
    },
    // 配置babel-loader
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};