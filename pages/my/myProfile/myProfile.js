
const app = getApp()
const ajax = require('../../../utils/ajax.js')
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    myAppealList: [],
    swiperHeight: 2400
  },
  pageData: {
    pageNO: 1,
    pageSize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let userInfo = wx.getStorageSync("userInfo")
    if(!userInfo){

      wx.navigateTo({
        url: '/pages/welcome/welcome',
      })

      return

    }

    this.setData({
      userInfo: userInfo
    })


    this.loadMyData()

    this.loadMyAppeal()


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

  // 去编辑页面
  gotoEditProfile(){
    wx.navigateTo({
      url: '/pages/my/editProfile/editProfile',
    })
  },

  // 加载我的一些信息 (诉求、动态、点赞 次数)
  loadMyData(){

    let that = this
    let userInfo = wx.getStorageSync("userInfo")

    let params = {
      userId: userInfo.userId
    }

    ajax.HTTP.post(ajax.API.getByIdUserData, params, (e)=>{

      that.setData({
        userInfo: e.data.result
      })

      wx.setStorageSync('userInfo', e.data.result)

    })

  },
  // 查询我的诉求
  loadMyAppeal(){

    let that = this
    let userInfo = wx.getStorageSync('userInfo')

    let params = {
      wjUser: userInfo,
      pageQuery: this.pageData

    }

    ajax.HTTP.post(ajax.API.listByUserIdMyAppeal, params, (e)=>{
      let appealList = e.data.result.records
      appealList.forEach((item, index) => {
          item.wjAppeal.createTime = util.format(new Date(item.wjAppeal.createTime))
      })
      that.setData({
        myAppealList: appealList,
        swiperHeight: 600 * appealList.length
      })
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