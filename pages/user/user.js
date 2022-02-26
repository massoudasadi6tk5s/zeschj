// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wjUser:{
      headPortrait: '../../images/user/me.png',
      nickName: '小小微距',
      signature: '拉近你我距离',
      introduce: '不论性别与否，男性朋友、女性朋友、男朋友或女朋友等，多么希望有一个人来看望自己啊。',
      photos: ['../../images/user/rectangle-copy-12.png', '../../images/user/rectangle-copy-14.png', 
        '../../images/user/rectangle-copy-15.png'
      ]

      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let wjUser = wx.getStorageSync("wjUser")
    if(!wjUser){

      wx.navigateTo({
        url: '/pages/welcome/welcome',
      })

      return

    }

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
    let wjUser = wx.getStorageSync("wjUser")
    if (!wjUser) {
      return
    }

    this.setData({
      wjUser: wjUser
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