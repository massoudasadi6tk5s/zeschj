// 封装所有的对外请求方法

const CONTENT_TYPE = {
  FORM: 'application/x-www-form-urlencoded',
  JSON: 'application/json;charset=UTF-8'
}

// 域名
const host = 'http://localhost:8080'


// 模块
const moduleA = "user";

const moduleTest = "test"
 

// 具体请求（接口）
const API = {

  FINDALL: `${host}/${moduleTest}/findAll`,  // 测试查询所有的


  // start 用户相关接口
  alipayAuthorization: `${host}/${moduleA}/alipayAuthorization` // 用户授权接口



  // end 用户相关接口
  


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
  
  my.request({
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
  ajax: HTTP
}