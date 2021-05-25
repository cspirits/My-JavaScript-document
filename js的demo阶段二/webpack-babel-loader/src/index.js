/*
 * @Date: 2021-05-25 18:30:39
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-25 20:12:32
 * @FilePath: \webpack-babel-loader\src\index.js
 */
/

import "core-js/stable"; //使用core-js进行babel转码

// 测试文件
let name = 'xiaochen';
const age = 20;

console.log(`name叫做${name},age是${age}`);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
new Person('xiaoli', 10);