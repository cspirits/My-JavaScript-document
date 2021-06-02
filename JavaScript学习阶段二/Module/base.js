/*
 * @Author: labixiaochen
 * @LastEditors: Tt's me too
 * @FirstEditTime: new Data()
 * @sayings: 质量编码,解决问题
 * @ObjectDescript: 模块化的测试文件
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('导出的模块化方法speak');
    }
    static speak() {
        console.log('导出的模块化的静态方法speak');
    }
}
export default Person;