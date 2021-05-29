/*
 * @Date: 2021-05-29 13:32:49
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-29 16:28:53
 * @FilePath: \js的demo阶段二\封装Ajax实验未完成\defaults.js
 */
// 默认参数

import {
    HTTP_GET,
    Content_Type_from_Urlencode,

} from './constant.js';
const DEFAULTS = {
    method: HTTP_GET,
    // 请求头携带的数据
    params: null,
    // 请求体携带的数据
    data: null,
    contentType: Content_Type_from_Urlencode,
    responseType: '',
    timeoutTime: 0,
    withCredentials: false,

    // 方法
    success() {},
    httpCodeError() {},
    error() {},
    abort() {},
    timeout() {}

};

export default DEFAULTS;