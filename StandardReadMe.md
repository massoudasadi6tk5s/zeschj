## 前端项目规范
### 命名规范
#### 前端小程序文件名
以首字母小写为主的驼峰写法（默认创建时就是小写，改大写时麻烦），例如：
* homePage
    * homePage.wxml
    * homePage.wxss
    * homePage.js
    * homePage.json
#### class样式类命名
小写并以中线连接，例如
```
<view class="home-page"></view>
```
#### js变量名
* 基本变量的驼峰命名
```js
let homePage = []
let name = '小明'
```
* 常量名的大写或首字符大写
```js
const AudioContext = wx.createInnerAudioContext() 
const API = {}
```
### css(wxss)书写规范
```css```或```wxss```的样式书写，应遵循父元素下的子元素，递进式的书写，谨慎处理公共样式
```html
<view class="home-page">
    <view class="header">
        <view class="title">标题</view>
    </view>
<view>
```
* 反例
```css
.home-page{}
.header{}
.title{}
```
* 标准
```css
.home-page{}
.home-page .header{}
.home-page .header .title{}
```
注意：对于敏感的单词，例如```header```和```title```等，一定要做特别的限制要求，容易造成样式混合错乱。开发中自己视情况而定。

### JS处理规范

#### js变量定义

- 比如data 中的值，必须在 wxml 中有用，不然不放在 data 中。  其他值放入pageData中。

  ```javascript
  Page({
      
      data: {}
      pageData:{}
  })
  ```

  



### 目录结构规范
* components   //公共的组件封装文件夹
* assets       //静态资源文件
* pages        //所有的页面文件夹
* utils        //所有的工具函数文件夹(包括封装的ajax)
* readme.md    //项目介绍

封装工具函数的js文件统一放在```utils```文件夹


