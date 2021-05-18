/*
 * @Author: labixiaochen
 * @LastEditors: Tt's me too
 * @FirstEditTime: new Data()
 * @sayings: 质量编码,解决问题
 * @ObjectDescript: 
 */
// 箭头函数的注意事项
// 单个参数
// 单个参数
// 单个参数
// 当只有一个参数的时候()可以省略
let name = (x) => {
    return x + 1;
}
console.log(name(1)) //2

let name1 = x => {
    return x + 2;
}
console.log(name1(2)); //4
// 0个或者多个参数是不能省略的，否者是直接会在编辑器中进行提醒的，然后输出的时候报错

// 单行函数体
// 单行函数体
// 单行函数体
// 单行函数体的时候是可以同时省略return和{}的,这个吊了，连return都省略了，但是一个注意点，就会必须同时省略，不能也会报错，这个有点不太人性化，可能是为了让我们规范代码结构吧
let add = x => x + 1;
console.log(add(1)); //2
// 多汗函数体是不能简化的，这个也好理解，那么多行你怎么简化呢？你简化了你自己还能看的哪对哪吗？这个就规范了我们必须一个复杂函数简化为多个简单函数，反而代码结构还好看了点

// 单行对象
// 单行对象
// 单行对象
// 如果箭头函数返回的是一个单行对象的话,你就必须在对象的{}的外面加上一个(),不然不只是浏览器,包括你自己也会搞错的,加上的目的是让浏览器不要去认为那个是函数的{}
// 完整输出对象的案例
let sum = (x, y) => {
    return {
        value: x + y
    }
}
console.log(sum(2, 1)); //{value: 3}

// 简化版本
let sum1 = (x, y) => ({
    value: x + y
});
console.log(sum1(1, 3)); //{value: 4}