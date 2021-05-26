/*
 * @Date: 2021-05-26 16:14:34
 * @LastEditors: LaBiXiaoChen
 * @LastEditTime: 2021-05-26 16:58:57
 * @FilePath: \Cookie操作\cookie的封装\cookie.js
 */
// 写入cookie
export const set = (name, value, {
    maxAge,
    domain,
    path,
    secure
} = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    }
    if (domain) {
        cookieText += `; domain=${domain}`;
    }
    if (path) {
        cookieText += `; path=${path}`;
    }
    if (secure) {
        cookieText += `; secure`;
    }

    document.cookie = cookieText;
};

// 通过name属性获取cookie值
export const get = name => {
    name = `${encodeURIComponent(name)}`;
    const cookies = document.cookie.split('; ');

    for (let item of cookies) {
        const [cookieName, cookieValue] = item.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return;
};


// 通过name属性删除cookie值
// 我自己写的
// export const remove = name => {
//     name = `${encodeURIComponent(name)}`;
//     const cookies = document.cookie.split('; ');

//     for (let item of cookies) {
//         const [cookieName, cookieValue] = item.split('=');
//         if (cookieName === name) {
//             set(cookieName, cookieValue, {
//                 maxAge: -1
//             })
//         }
//     }
//     return;
// }

// 大佬写的
export const remove = (name, {
    domain,
    path
} = {}) => {
    set(name, '', {
        domain,
        path,
        maxAge: -1
    });
}
// 简直了， 我写了那么多， 我也是想用set来完成， 但是人家的代码比我简约多了