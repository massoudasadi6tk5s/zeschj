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
  pageData:{
    pageNO: 1,
    pageSize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    let that = this
    let left = this.data.leftAppealList
    let right = this.data.rightAppealList

    let params = {
      pageNO: this.pageData.pageNO,
      pageSize: this.pageData.pageSize
    }
    ajax.HTTP.post(ajax.API.listPageAppeal, params, function(e){

      let appealList = e.data.result

      appealList.forEach((item, index) => {

        if(index % 2 == 0){
          item.createTime = util.format(new Date(item.createTime))
          left.push(item)
        }else{
          item.createTime = util.format(new Date(item.createTime))
          right.push(item)
        }


      })
      
      that.setData({
        leftAppealList: left,
        rightAppealList: right
      })
      

    }, 'json')
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


  // 进入诉求详情
  gotoDetails(e) { 

    let id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: '/pages/appealDetails/apealDetails?appealId=' + id
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})