// pages/test.js
const ajax = require('../../utils/ajax.js')
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    // 获取其 code 传到后端 获取其 session_key
    wx.login({
      success(res) {
        console.log(res.code)
        ajax.HTTP.get(ajax.API.getUserCode + '/'+ res.code, null, function(res){

          if(res.data.code == 200) {
            wx.setStorageSync('sessionKeyToUuid', res.data.result)

          }
          
        }, 'json');
      }
    })


  },



  // 跳转到主页
  bindgetuserinfo(){


        wx.getUserInfo({
          // withCredentials: true,
          success: function (res) {
            console.log('获取用户信息')
            console.log(res)

            let params = {
              rawData: res.rawData,
              signature: res.signature,
              encryptedData: res.encryptedData,
              iv: res.iv,
              sessionKeyToUuid: wx.getStorageSync('sessionKeyToUuid')
            }
            ajax.HTTP.post(ajax.API.userAuthorization, params, function(res){

              if(res.data.code == 200){
                wx.setStorageSync('userInfo', res.data.result)

                wx.switchTab({
                  url: '/pages/appeal/appeal',
                })
              }
              
              console.log(res.data.result);
            }, 'json');
          },
          fail(res) {
            console.log('获取用户信息错误')
            console.log(res)
          }
        })


  },




  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})