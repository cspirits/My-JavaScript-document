/*
 * @Date: 2021-05-29 15:30:45
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-29 15:40:53
 * @FilePath: \js的demo阶段二\封装Ajax\index.js
 */

import Ajax from './Ajax.js';

const ajax = (url, options) => {
    return new Ajax(url, options).getXhr();
}

const get = (url, options) => {
    return ajax(url, {
        ...options,
        method: 'GET'
    });
}
const post = (url, options) => {
    return ajax(url, {
        ...options,
        method: 'POST'
    });
}

const getJSON = (url, options) => {
    return ajax(url, {
        ...options,
        method: 'GET',
        responseType: 'json'
    });
}


export {
    ajax,
    get,
    getJSON,
    post
};