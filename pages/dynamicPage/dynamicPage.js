const app = getApp()

import http from '../../utils/api.js';
import util from '../../utils/util.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynamicList: {}
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

    let that = this

    let data = {
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

  // 动态点赞
  addDynamicEndorse(e) {

    let that = this
    let id = e.currentTarget.dataset.id

    let data = {
      dynamicId: id,
    }

    http.dynamicEndorse({
      data,
      success: res => {

        let dynamicList = that.data.dynamicList

        dynamicList.forEach((item, index) => {

          if (item.dynamicId == id) {
            dynamicList[index].isEndorse = true
            dynamicList[index].endorseCount = dynamicList[index].endorseCount + 1
          }

        })

        that.setData({
          dynamicList: dynamicList
        })


      },
      fail: err => {

      }

    })


  },

  // 取消点赞
  cancelEndorse(e) {

    let that = this
    let id = e.currentTarget.dataset.id

    let data = {
      dynamicId: id
    }

    http.cancelEndorse({
      data,
      success: res => {

        let dynamicList = that.data.dynamicList

        dynamicList.forEach((item, index) => {

          if (item.dynamicId == id) {
            dynamicList[index].isEndorse = false
            dynamicList[index].endorseCount = dynamicList[index].endorseCount - 1
          }

        })

        that.setData({
          dynamicList: dynamicList
        })



      },
      fail: err => {

      }
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