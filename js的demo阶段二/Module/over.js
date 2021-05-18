/*
 * @Author: labixiaochen
 * @LastEditors: Tt's me too
 * @FirstEditTime: new Data()
 * @sayings: 质量编码,解决问题
 * @ObjectDescript: 
 */

import Person from './base.js'
import Mama from './next.js';

let p = new Person('xiaochen', 12); //因为我在这个模块中使用Person，所以必须引入
p.speak();
Person.speak();
let mama = new Mama('liguip', 40);
mama.speak();
Mama.speak();