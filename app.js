//app.js
const ajax = require('utils/ajax.js')

App({
  onLaunch: function () {


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
    // 腾讯地图key
    MAPKEY: "5U5BZ-PB6AD-PMW4R-PBJ3M-5PDHK-7XBIM"
  }
})