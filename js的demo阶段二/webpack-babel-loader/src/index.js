/*
 * @Author: labixiaochen
 * @LastEditors: Tt's me too
 * @FirstEditTime: new Data()
 * @sayings: 质量编码,解决问题
 * @ObjectDescript: 
 */

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