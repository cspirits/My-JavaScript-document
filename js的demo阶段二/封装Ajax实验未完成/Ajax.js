/*
 * @Date: 2021-05-28 15:13:53
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-29 16:19:48
 * @FilePath: \js的demo阶段二\封装Ajax实验未完成\Ajax.js
 */


import DEFAULTS from './defaults.js'
import {
    serialize,
    addURLData,
    serializeJson
} from './utils.js';
import {
    HTTP_GET,
    Content_Type_from_Urlencode,
    Content_Type_from_Json
} from './constant.js';

class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({},
            DEFAULTS, options); //将默认选项分离出去

        // 调用初始化
        this.init();
    }

    // 初始化函数
    init() {
        const xhr = new XMLHttpRequest();
        this.xhr = xhr;
        this.bindEvents();

        xhr.open(this.options.method, this.url + this.addParam(), true);

        // 设置responseType
        this.setResponseType();

        // 设置跨域是否携带cookie
        this.setCookie();

        // 设置超时
        this.setTimeout();

        // 发送请求的函数
        this.SendData();

    }

    // 绑定响应事件处理程序
    bindEvents() {
        const xhr = this.xhr; //利用这句话不需要去修改下面cv过来的代码块了

        const {
            success,
            httpCodeError,
            error,
            abort,
            timeout
        } = this.options;

        // load事件
        xhr.addEventListener('load', () => {
            if (this.ok()) {
                success(xhr.response.xhr); //当成功的时候，将响应内容传过去，然后xhr本身也传过去
            } else {
                httpCodeError(xhr.status, xhr); //当状态码不正常的时候，将xhr的状态码传过去，看看是什么问题
            }
        }, false)

        // error事件
        xhr.addEventListener('error', () => {
            error(xhr.status, xhr);
        }, false)

        // abort事件
        xhr.addEventListener('abort', () => {
            abort(xhr.status, xhr);
        }, false)

        // timeout事件
        xhr.addEventListener('timeout', () => {
            timeout(xhr.status, xhr);
        }, false)

    }

    // 检测响应的状态码是否正常函数
    ok() {
        const xhr = this.xhr;
        return (xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304;
    }

    // 在url地址上面添加数据
    addParam() {
        const {
            params
        } = this.options;
        if (!params) return "";
        return addURLData(this.url, serialize(params));
    }

    // 设置responseType的函数
    setResponseType() {
        this.xhr.responseType = this.options.responseType;
    }

    // 设置跨域是否携带cookie的函数
    setCookie() {
        if (this.options.withCredentials) {
            this.xhr.withCredentials = true;
        }
    }

    // 设置超时的函数
    setTimeout() {
        const {
            timeoutTime
        } = this.options;
        if (timeoutTime > 0) {
            this.xhr.timeout = timeoutTime;
        }
    }

    // 发送请求的函数
    SendData() {
        const xhr = this.xhr;
        const {
            data
        } = this.options;
        if (!this.isSendData()) {
            return xhr.send(null);
        }

        let resultData = null;

        if (this.isFormData()) {
            // 判断是否是FromData数据
            resultData = data;
        } else if (this.isFormUrlEncodedData()) {
            // 判断是否是'application/x-www-form-urlencodend'这种类型的数据
            this.setContentType(Content_Type_from_Urlencode);
            resultData = serialize(data);
        } else if (this.isFormJsonData()) {
            // 发送json格式
            this.setContentType(Content_Type_from_Json);
            resultData = serializeJson(data);
        } else {
            // 发送其他格式，这是我万万没想到的，想的那么全啊，
            this.setContentType();
            resultData = data;
        }
        xhr.send(resultData);
    }

    // 是否是发送的数据
    isSendData() {
        const {
            data,
            method
        } = this.options;
        if (!data) return false;
        if (method.toLowerCase() === HTTP_GET.toLowerCase()) return false;
        return true; //除了前面两个不需要发送的情况，剩下的均需要发送，使用排除法，机智啊
    }

    // 判断是否是FromData数据
    isFormData() {
        return this.options.data instanceof FormData;
        // 判断是否是FormData的实例，这个判断绝了
    }

    // 判断是否是'application/x-www-form-urlencodend'这种类型的数据
    isFormUrlEncodedData() {
        return this.options.contentType.toLowerCase().includes(Content_Type_from_Urlencode);
    }

    // 判断是否是json的数据
    isFormJsonData() {
        return this.options.contentType.toLowerCase().includes(Content_Type_from_Json);
    }

    // 设置ContentType
    setContentType(contentType = this.options.contentType) {
        if (!contentType) return;
        this.xhr.setRequestHeader('Content-Type', contentType);
    }

    // 获取xhr对象,将xhr暴露到外部，这样就能在外部来终止发送
    getXhr() {
        return this.xhr;
    }
}

export default Ajax;