//app.js
const ajax = require('utils/ajax.js')

App({
  onLaunch: function() {

    this.getUserInfo()

    //获取手机的系统信息(状态栏高度)
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight; //手机状态栏高度
        let capsule = wx.getMenuButtonBoundingClientRect(); //胶囊位置坐标信息
        if (capsule) {
          this.globalData.Custom = capsule; //
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },

  globalData: {
    // 腾讯地图key
    MAPKEY: "5U5BZ-PB6AD-PMW4R-PBJ3M-5PDHK-7XBIM"
  },
  getUserInfo() {
    if (wx.getStorageSync('userInfo')) {
      return
    }
    // 发送code 到后端，验证用户有没有授权  没有授权就不做任何授权； 授权就返回用户信息缓存起来
    wx.login({
      success(res) {

        console.log(res.code)

        let params = {
          code: res.code
        }
        ajax.HTTP.post(ajax.API.detectionUserAuthorization, params, function(res) {
          console.log(res)

          if (!res.data.result) {
            return
          }
          wx.setStorageSync('userInfo', res.data.result)
        }, 'json');

      }
    })
  },
})