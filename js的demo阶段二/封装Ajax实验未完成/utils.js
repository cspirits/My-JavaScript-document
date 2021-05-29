/*
 * @Date: 2021-05-29 14:13:17
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-29 15:57:42
 * @FilePath: \js的demo阶段二\封装Ajax\utils.js
 */

// 工具函数

// 数据序列化成urlencoded格式的字符串
const serialize = param => {
    const results = [];

    for (const [key, value] of Object.entries(param)) {
        results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }

    return results.join("&");
}

// 数据序列化成json格式的字符串
const serializeJson = param => {
    return JSON.stringify(param);
};

// 给URL添加参数
const addURLData = (url, data) => {
    if (!data) return '';
    const mark = url.includes('?') ? '&' : '?';

    return `${mark}${data}`;
}
export {
    serialize,
    addURLData,
    serializeJson
};