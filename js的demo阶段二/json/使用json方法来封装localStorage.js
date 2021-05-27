/*
 * @Date: 2021-05-27 20:13:15
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-27 22:38:28
 * @FilePath: \js的demo阶段二\json\使用json方法来封装localStorage.js
 */

const storage = window.localStorage; //同样可以实现sessionStorage的封装，完全相同

// 设置
const set = (key, value) => {
    return storage.setItem(key, JSON.stringify(value));
}

// 获取
const get = (key) => {
    return JSON.parse(storage.getItem(key));
}

// 删除
const remove = (key) => {
    storage.removeItem(key);
}

// 清空
const clearAll = () => {
    storage.clear();
}

export {
    set,
    get,
    remove,
    clearAll
}