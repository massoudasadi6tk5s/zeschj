const app = getApp()

import http from '../../utils/api.js';
import util from '../../utils/util.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynamicList: {},
    content: '' // 模糊搜索动态内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.queryDynamic();
  },

  queryDynamic(){

    let that = this

    let data = {
      content: this.data.content,
      createTime: false,
      endorseCount: false,
      pageQuery: {
        pageSize: 10,
        pageNo: 1
      }
    }

    http.pageDynamic({
      data,
      success: res => {

        let dynamic = res.result.records
        dynamic.forEach((item, index) => {
          item.createTime = util.format(new Date(item.createTime))
        })

        that.setData({
          dynamicList: dynamic
        })


      },
      fail: err => {

      }

    })

  },

  // 监控搜索输入
  monitorSearch(e){

    let content = e.detail.value

    this.setData({
      content: content
    })

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