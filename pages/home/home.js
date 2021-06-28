// pages/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的导航菜单索引
    currentIndexNav: 0,
    // 导航
    navList: [
      {"text": "最热", "id": 1},
      { "text": "最新", "id": 2 },
      { "text": "附近", "id": 3 },
      { "text": "妹子", "id": 4 },
      { "text": "汉子", "id": 5 },

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.redirectTo({
    //   url: '/pages/welcome/welcome',
    // })
  },

  activeNav(e){
    this.setData({
      currentIndexNav: e.target.dataset.index
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