// pages/appealComment/appealComment.js
import http from '../../utils/api.js';
import util from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    appealId: '',
    commentList: []
  },

  pageData: {
    pageNo: 1,
    pageSize: 10
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let appealId = options.appealId

    this.setData({
      appealId: appealId
    })

    this.queryComment();

  },

  // 查询评论
  queryComment(){

    let that = this

    let data = {
      appealId: this.data.appealId,
      pageQuery: this.pageData
    }

    http.pageAppealComment({
      data,
      success: res => {

        let result = res.result

        result.records.forEach(item => {
          item.createTime = util.format(new Date(item.createTime))
        })

        that.setData({
          commentList: result.records
        })
        

      },
      fail: err => {

      }
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