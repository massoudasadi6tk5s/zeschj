// pages/test.js
const app = getApp()
const ajax = require('../../utils/ajax.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的导航菜单索引
    currentIndexNav: 0,
    isLoading: true,
    // 导航
    navList: [{
        "text": "最热",
        "id": 1
      },
      {
        "text": "最新",
        "id": 2
      },
      {
        "text": "附近",
        "id": 3
      }

    ],
    current: 0,
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
  onLoad: function(options) {
    this.getAppealList()
  },
  refresherEvent: function(e) {
    // console.log(e)
  },
  // 滑动选择标签
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index,
      current: e.target.dataset.index
    })
  },

  // 帖子下滑触底
  postSole(e) {

  },

  swiperCurrent(e) {
    console.log(e.detail.current)

    this.setData({
      currentIndexNav: e.detail.current
    })
  },



  // 进入发布诉求页面
  goToRelease(e) {

    wx.navigateTo({
      url: '/pages/appealRelease/appealRelease',
    })

  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  getAppealList: function() {
    let that = this
    let userInfo = wx.getStorageSync('userInfo')
    let left = this.data.leftAppealList
    let right = this.data.rightAppealList
    let params = {
      wjUser: userInfo,
      pageQuery: {
        pageNO: this.pageData.pageNO,
        pageSize: this.pageData.pageSize
      }
    }
    ajax.HTTP.post(ajax.API.listPageAppeal, params, function(e) {
      let appealList = e.data.result.records
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
        rightAppealList: right,
        isLoading: false
      })

    }, 'json')
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("到底了")
  }
})