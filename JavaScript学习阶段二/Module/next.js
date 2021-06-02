/*
 * @Author: labixiaochen
 * @LastEditors: Tt's me too
 * @FirstEditTime: new Data()
 * @sayings: 质量编码,解决问题
 * @ObjectDescript: 
 */
import Person from './base.js';

class Mama extends Person {
    constructor(name, age) {
        super(name, age); //继承的时候必须先使用super()不然只写this，默认是this在super之前了，报错
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}说话了`)
    }
    static speak() {
        console.log(`${this.name}静态说话了`)
    }
}

export default Mama;