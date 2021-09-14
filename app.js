//app.js
const ajax = require('utils/ajax.js')

App({
  onLaunch: function () {

    ajax.HTTP.get(ajax.API.testTwo, null, function(res){}, 'json')


    if(wx.getStorageSync('userInfo')){
      return
    }

    // 发送code 到后端，验证用户有没有授权  没有授权就不做任何授权； 授权就返回用户信息缓存起来
    wx.login({
      success(res) {

        console.log(res.code)

        let params = {
          code: res.code
        }

        ajax.HTTP.post(ajax.API.detectionUserAuthorization, params, function (res) {
          console.log(res)
          
          if (!res.data.result) {
            return
          }
          wx.setStorageSync('userInfo', res.data.result)
        }, 'json');

      }
    })


  },
  globalData: {

  }
})