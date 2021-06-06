/*
 * @Date: 2021-06-05 11:31:24
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-06-06 14:27:20
 * @FilePath: \移动端开发学习\移动端适配\通用适配方案\setAllRemUnit.js
 */


// 为了防止污染全局作用域，使用IIFE进行局部化
(function () {

    'use strict'
    // 防止一些js中一些糟粕，使用严格模式

    // dpr->scale = 1 / dpr
    var docEl = document.documentElement,
        viewportEl = document.querySelector('meta[name="viewport"]'),
        dpr = window.devicePixelRatio || 1,
        maxWidth = 540,
        minWidth = 320;

    dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);

    docEl.setAttribute('data-dpr', dpr);
    docEl.setAttribute('max-width', maxWidth);
    docEl.setAttribute('min-width', minWidth);


    var scale = 1 / dpr,
        content = 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no';

    if (viewportEl) {
        viewportEl.setAttribute('content', content);
    } else {
        viewportEl = document.createElement('meta');
        viewportEl.setAttribute('name', 'viewport');
        viewportEl.setAttribute('content', content);
        document.head.appendChild(viewportEl);
    }


    setRemUnit();

    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        // html在DOM中为document.documentElement
        //1rem = viewWidth / 18.75 //这个18.75是怎么得来的啊？
        const ratio = 18.75
        let viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;
        // console.log(viewWidth);//测试一下是否获取到了
        docEl.style.fontSize = viewWidth / ratio + 'px';
    }
})();