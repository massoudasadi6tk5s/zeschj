## 前端项目规范
### 命名规范
#### 前端小程序文件名
以首字母大写为主，例如：
* HomePage
    * HomePage.wxml
    * HomePage.wxss
    * HomePage.js
    * HomePage.json
#### class样式类命名
小写并以中线连接，例如
```
<view class="home-page"></view>
```
#### js变量名
基本的驼峰命名
```js
let homePage = []
let name = '小明'
```
### 目录结构规范
* components   //公共的组件封装文件夹
* assets       //静态资源文件
* pages        //所有的页面文件夹
* utils        //所有的工具函数文件夹(包括封装的ajax)
* readme.md    //项目介绍

封装工具函数的js文件统一放在```utils```文件夹


