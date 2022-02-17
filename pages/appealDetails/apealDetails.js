// pages/appealDetails/apealDetails.js

import http from '../../utils/api.js';
import util from '../../utils/util.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    appealList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this

    let data = {
      appealId: options.appealId
    }

    // 查询诉求

    http.appeal({
      data,
      success: res => {
        that.setData({
          appealList: res.result
        })
      },
      fail: err => {

      }
    })

    

  },


  return(e){
    wx.navigateBack({
      delta: 2
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