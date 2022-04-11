const app = getApp()

import http from '../../../utils/api.js';
import util from '../../../utils/util.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    wjUser: {},
    myAppealList: [],
    dynamicList: [],
    swiperHeight: 2400,
    swiperIndex: 3
  },
  pageData: {
    pageNO: 1,
    pageSize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let wjUser = wx.getStorageSync('wjUser')
    if (!wjUser) {

      wx.navigateTo({
        url: '/pages/welcome/welcome',
      })

      return

    }

    this.setData({
      wjUser: wjUser
    })


    this.loadMyData()

    this.loadMyAppeal()
    this.loadMyDynamic()


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
  gotoEditProfile() {
    wx.navigateTo({
      url: '/pages/my/editProfile/editProfile',
    })
  },

  // 切换 swiper
  switchSwiper(e) {

    let index = e.currentTarget.dataset.index

    this.setData({
      swiperIndex: index
    })


  },

  // 加载我的一些信息 (诉求、动态、点赞 次数)
  loadMyData() {

    let that = this

    let data = {}

    http.userData({
      data,
      success: res => {

        that.setData({
          wjUser: res.result
        })

      },
      fail: res => {

      }

    })


  },
  // 查询我的诉求
  loadMyAppeal() {

    let that = this

    let data = {
      pageQuery: this.pageData
    }

    http.myAppeal({
      data,
      success: res => {

        let appealList = res.result.records
        appealList.forEach((item, index) => {
          item.createTime = util.format(new Date(item.createTime))
        })
        that.setData({
          myAppealList: appealList,
          swiperHeight: 600 * appealList.length
        })

      },
      fail: err => {

      }
    })


  },

  // 查询我的动态
  loadMyDynamic() {

    let that = this

    let data = {
      pageQuery: this.pageData,
      createTime: false,
      endorseCount: false
    }

    http.myDynamic({
      data,
      success: res => {

        let dynamicList = res.result.records
        dynamicList.forEach((item, index) => {
          item.createTime = util.format(new Date(item.createTime))
        })
        that.setData({
          dynamicList: dynamicList,
        })

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