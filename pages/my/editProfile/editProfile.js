import http from '../../../utils/api.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {

    wjUser: {},
    headPortrait: '/images/user/me.png'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let wjUser = wx.getStorageSync('wjUser')

    this.setData({
      wjUser: wjUser
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

  
  // 修改用户资料
  updateUser(e){

    let data = e.detail.value

    http.updateUser({
      data,
      success: res => {
        
        if(res.code === 200){

          wx.setStorageSync('wjUser', res.result)

          wx.showToast({
            title: '修改成功',
          })

        }
        
      },
      fail: err => {}
    })


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