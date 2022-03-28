// pages/test.js
const app = getApp()
import http from '../../utils/api.js';
import util from '../../utils/util.js';

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
    CustomBar:app.globalData.CustomBar,
    current: 0,
    leftAppealList: [], // 左侧诉求集合
    rightAppealList: [], // 右侧诉求集合
    pageData: {
      pageNO: 2,
      pageSize: 40
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAppealList()
  },
  refresherEvent: function (e) {
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  getAppealList: function () {
    let that = this
    let left = this.data.leftAppealList
    let right = this.data.rightAppealList
    let data = {
      createTime: false,
      endorseCount: false,
      pageQuery: {
        pageNO: this.data.pageData.pageNO,
        pageSize: this.data.pageData.pageSize
      }
    }


    //115+图片的高度139(贪心算法)
    http.pageAppeal({
      data,
      success: res => {
        let appealList = res.result.records
        let waterfallNum = {
          left: 0,
          right: 0
        }
        appealList.forEach((item, index) => {
          item.createTime = util.format(new Date(item.createTime))
          if (waterfallNum.left === waterfallNum.right || waterfallNum.left < waterfallNum.right) {
            left.push(item)
            let num = item.appealMaterial.length > 0 ? 139 : 0
            waterfallNum.left += 115 + num
          } else {
            right.push(item)
            let num = item.appealMaterial.length > 0 ? 139 : 0
            waterfallNum.right += 115 + num
          }
        })
        that.setData({
          leftAppealList: left,
          rightAppealList: right,
          isLoading: false
        })

      },
      fail: res => {

      }
    })




  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("到底了")
  }
})