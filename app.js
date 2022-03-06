//app.js
import http from 'utils/api.js' // 引入api接口管理文件

App({
  
  onLaunch: function() {

    // this.userLogin()

    //获取手机的系统信息(状态栏高度)
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight; //手机状态栏高度
        let capsule = wx.getMenuButtonBoundingClientRect(); //胶囊位置坐标信息
        console.log(capsule)
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
    MAPKEY: "5U5BZ-PB6AD-PMW4R-PBJ3M-5PDHK-7XBIM",
    // host: 'http://192.168.3.2:8080/weiju',
    // chatSocket: 'http://192.168.3.2:8080/weiju/chatSocket',
    host: 'https://www.weiju.fun/weiju',
    chatSocket: 'https://weiju.fun/weiju/chatSocket',
  },


  // 用户授权登录 返回用户信息、token 并存储到 storage
  userLogin(){

    wx.login({
      success(res) {

        http.userLogin({
          data:{code: res.code},
          success: res => {
            
            wx.clearStorageSync()
            wx.setStorageSync('wjUser', res.result.wjUser)
            wx.setStorageSync('token', res.result.token)

            console.log(res)
          },
          fail: err => {

          }
        })


      }
    })

  }


})