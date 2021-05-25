## 1.将配置文件package.json移动到目标文件夹中
```
 npm install
```

## 2. 安装babel-loader
```
 npm install --save-dev babel-loader@8.1.0 @babel/core@7.11.0 @babel/preset-env@7.11.0
 ```

## 3.安装babel
 ```
 npm install --save-dev @babel/core@7.11.0 @babel/preset-env@7.11.0
 ```

## 4. 配置babel-loader
##### 相关具体细节可以访问此链接，如果没有就直接略过即可
 ```
 https://www.webpackjs.com/concepts/loaders/
 ```

## 5. 安装core-js
 ```
 npm install --save-dev core-js@3.6.5
 ```
 import "core-js/stable";//添加到你想要编译的js文件顶部
使用core-js进行babel转码

## 6.编译并执行
 ```
 npm run webpack
 ```

##### 结果：会将src中目前js文件转换为es6以前的js代码，并且完成打包操作输出到dist文件夹中