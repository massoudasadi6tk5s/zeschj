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


    // 隐藏底部导航栏
    // wx.hideTabBar()
    // ajax.HTTP.get(ajax.API.FINDALL, null, this.cbFindAll, 'form');
  },

  cbFindAll(res){
    console.log(res);
  },


  // 跳转到主页
  goToHome(){

    wx.checkSession({
      success() {
        wx.getUserInfo({
          // withCredentials: true,
          success: function (res) {
            console.log('获取用户信息')
            console.log(res)
          },
          fail(res) {
            console.log('获取用户信息错误')
            console.log(res)
          }
        })
      },
      fail() {
        wx.login({
          success(res) {
            console.log(res.code)

          }
        })
      }
    })

    // app.globalData.welcomePage = true // 表示已经显示了欢迎页

    // wx.switchTab({
    //   url: '/pages/appeal/appeal',
    // })

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