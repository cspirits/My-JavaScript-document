/*
 * @Date: 2021-06-05 11:31:24
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-06-05 11:35:08
 * @FilePath: \移动端开发学习\移动端适配\setRemUnit.js
 */


// 为了防止污染全局作用域，使用IIFE进行局部化
(function () {

    'use strict'
    // 防止一些js中一些糟粕，使用严格模式

    setRemUnit();

    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        // html在DOM中为document.documentElement
        //1rem = viewWidth / 18.75 //这个18.75是怎么得来的啊？
        const DE = document.documentElement;
        const ratio = 18.75
        let viewWidth = DE.getBoundingClientRect().width || window.innerWidth;
        // console.log(viewWidth);//测试一下是否获取到了
        DE.style.fontSize = viewWidth / ratio + 'px';
    }
})();