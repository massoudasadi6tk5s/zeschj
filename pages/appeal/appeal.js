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
    CustomBar: app.globalData.CustomBar,
    current: 0,
    leftAppealList: [], // 左侧诉求集合
    rightAppealList: [], // 右侧诉求集合
    title: '', // 模糊搜索诉求标题
    isLoadingMore: true,
    pageData: {
      pageNO: 1,
      pageSize: 10,
      total: 0,
      waterfallNum: {
        left: 0,
        right: 0
      }
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
      current: e.target.dataset.index,
      leftAppealList: [],
      rightAppealList: []
    })

    // 如果要查询附近的
    if (e.target.dataset.index == 2) {

      this.getNearAppealList();

      return
    }

    this.getAppealList();

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

  getAppealList: function () {
    let that = this
    let left = this.data.leftAppealList
    let right = this.data.rightAppealList
    let waterfallNum = this.data.pageData.waterfallNum
    let data = {
      title: this.data.title,
      createTime: this.data.current == 1,
      endorseCount: this.data.current == 0,
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
        //如果为空返回
        if (appealList && appealList.length === 0) {
          return this.setData({
            isLoadingMore: false,
            isLoading: false
          })
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
          isLoading: false,
          ['pageData.waterfallNum']: waterfallNum,
          ['pageData.total']: res.result.total
        })
      },
      fail: err => {

      }
    })




  },

  // 附近诉求
  getNearAppealList() {

    let that = this

    let left = this.data.leftAppealList
    let right = this.data.rightAppealList
    let waterfallNum = this.data.pageData.waterfallNum

    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude

        let data = {
          title: that.data.title,
          latitude: latitude,
          longitude: longitude,
          pageQuery: {
            pageNO: that.data.pageData.pageNO,
            pageSize: that.data.pageData.pageSize
          }
        }

        http.listNearbyPageAppeal({
          data,
          success: res => {

            let appealList = res.result
            //如果为空返回
            if (appealList && appealList.length === 0) {
              return this.setData({
                isLoadingMore: false,
                isLoading: false
              })
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
              isLoading: false,
              ['pageData.waterfallNum']: waterfallNum
            })

          },
          fail: err => {}

        })




      }
    })




  },

  /**
   * 页面上拉触底事件的处理函数
   */
  loadMore: function () {
    if (this.data.isLoadingMore) {
      let pageNo = this.data.pageData.pageNO + 1
      this.setData({
        ['pageData.pageNO']: pageNo
      })
      this.getAppealList()
    }
  },

  // 监控搜索
  monitorSearch(e) {

    let title = e.detail.value

    this.setData({
      title: title
    })

  },

  // 搜索帖子
  searchAppeal() {

    this.setData({
      leftAppealList: [],
      rightAppealList: []
    })

    // 如果要查询附近的
    if (this.data.current == 2) {

      this.getNearAppealList();

      return
    }

    this.getAppealList();

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }


})