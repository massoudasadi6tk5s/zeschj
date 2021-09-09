// 封装所有的对外请求方法
import API from "./url.js"
const CONTENT_TYPE = {
  FORM: 'application/x-www-form-urlencoded',
  JSON: 'application/json;charset=UTF-8'
}
// 请求方式 1.请求地址 2.携带参数 3.回调函数 4.请求头类型
var HTTP = {}
HTTP.get = function(url, params, cb, contenttype) {
  ajax(url, params, cb, 'GET', contenttype)
}
HTTP.post = function(url, params, cb, contenttype) {
  ajax(url, params, cb, 'POST', contenttype)
}
HTTP.delete = function(url, params, cb, contenttype) {
  ajax(url, params, cb, 'DELETE', contenttype)
}
HTTP.put = function(url, params, cb, contenttype) {
  ajax(url, params, cb, 'PUT', contenttype)
}

function ajax(url, params, cb, action, contenttype) {
  
  wx.request({
    url: url,
    method: action,
    data: params,
    header: {
      'content-type': contenttype == 'form' ? CONTENT_TYPE.FORM:CONTENT_TYPE.JSON,
    },
    success: (res) => {

      if(typeof cb === 'function'){
        cb(res)
      }
         
    },
    fail(){
     
    },
    complete: () => {
      
    }
  })

}


module.exports = {
  API: API,
  HTTP: HTTP
}