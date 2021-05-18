/*
 * @Author: labixiaochen
 * @LastEditors: Tt's me too
 * @FirstEditTime: new Data()
 * @sayings: 质量编码,解决问题
 * @ObjectDescript: 商品展示区走马灯轮播图设计
 */

//! ul的总体宽度是2210px,li是171px，右边距50px,分成两部分1105px
var goods_ul = document.getElementById('goods-ul');
var btn_l = document.getElementById('btn-l');
var btn_r = document.getElementById('btn-r');

var left;
var index = 0;

btn_l.onclick = function () {
    if (index == 2) {
        index = 0;
    }
    goods_ul.style.left = -1105 * index + 'px';
    index++;
}
btn_r.onclick = function () {
    if (index == 0) {
        index = 2;
    }
    goods_ul.style.left = 1105 * index + 'px';
    index++;
}