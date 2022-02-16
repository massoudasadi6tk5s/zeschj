//app.js
import http from 'utils/api.js' // 引入api接口管理文件

App({
  onLaunch: function() {

    http.femaleNameApi({
      data: {a: 123},
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(res)
      }
    })

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
    MAPKEY: "5U5BZ-PB6AD-PMW4R-PBJ3M-5PDHK-7XBIM"
  },

  // 用户授权登录 返回用户信息、token 并存储到 storage
  // userLogin(){

  //   wx.login({
  //     success(res) {


  //       ajax.HTTP.post(ajax.API.userLogin, {code: res.code}, (e)=>{

  //         if(e.data.code == 200){
    
  //           let data = e.data.result
  //           wx.setStorageSync('wjUser', data.wjUser)
  //           wx.setStorageSync('token', data.token)
    
  //         }
    
  //       }, 'form')


  //     }
  //   })

  // }


})