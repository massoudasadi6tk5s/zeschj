// pages/my/myProfile/myProfile.js
const app = getApp()
const ajax = require('../../../utils/ajax.js')
const util = require('../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftAppealList: [], // 左侧诉求集合
    rightAppealList: [] // 右侧诉求集合
  },
  pageData: {
    pageNO: 1,
    pageSize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var userInfo = wx.getStorageSync("userInfo")
    if(!userInfo){

      wx.navigateTo({
        url: '/pages/welcome/welcome',
      })

      return

    }

    this.setData({
      userInfo: userInfo
    })


    let that = this
    let left = this.data.leftAppealList
    let right = this.data.rightAppealList

    let params = {
      wjUser: userInfo,
      pageQuery: {
        pageNO: this.pageData.pageNO,
        pageSize: this.pageData.pageSize
      }

    }
    ajax.HTTP.post(ajax.API.listPageAppeal, params, function (e) {

      let appealList = e.data.result

      appealList.forEach((item, index) => {

        if (index % 2 == 0) {
          item.wjAppeal.createTime = util.format(new Date(item.wjAppeal.createTime))
          left.push(item)
        } else {
          item.wjAppeal.createTime = util.format(new Date(item.wjAppeal.createTime))
          right.push(item)
        }


      })

      that.setData({
        leftAppealList: left,
        rightAppealList: right
      })


    }, 'json')


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