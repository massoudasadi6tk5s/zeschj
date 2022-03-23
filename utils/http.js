var HTTP = {}
HTTP.get = function (url, params, contentType) {
  http(url, 'GET', params, contentType)
}
HTTP.post = function (url, params, contentType) {
  http(url, 'POST', params, contentType)
}
HTTP.delete = function (url, params, contentType) {
  http(url, 'DELETE', params, contentType)
}
HTTP.put = function (url, params, contentType) {
  http(url, 'PUT', params, contentType)
}

function http(url, type, params, contentType) {

  let app = getApp();
  let host = app.globalData.host

  let token = wx.getStorageSync('token') // 获取token

  let data = {}

  if (params.data) { // 在这里判断一下data是否存在，params表示前端需要传递的数据，params是一个对象，有三组键值对，data：表示请求要发送的数据，success：成功的回调，fail：失败的回调，这三个字段可缺可无，其余字段会忽略
    for (let key in params.data) { // 在这里判断传过来的参数值为null，就删除这个属性
      if (params.data[key] == null || params.data[key] == 'null') {
        delete params.data[key]
      }
    }
    data = {
      ...params.data
    }
  }
  wx.request({
    url: host + url, // 就是拼接上前缀,此接口域名是开放接口，可访问
    method: type, // 接口的请求类型
    data,
    header: {
      'content-type': contentType == 'form' ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8',
      'token': token
    },
    success(res) {

      if (res.data.code !== '00000' && res.data.code !==200) {
        if (res.data.code === 'A0301') {
          wx.reLaunch({
            url: '/pages/welcome/welcome'
          })
          return
        }
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 2000
        })
        return
      }
      params.success && params.success(res.data)
    },
    fail(err) {
      params.fail && params.fail(err)
    }
  })
}

module.exports = {
  GET: HTTP.get,
  POST: HTTP.post,
  DELETE: HTTP.delete,
  PUT: HTTP.put
}