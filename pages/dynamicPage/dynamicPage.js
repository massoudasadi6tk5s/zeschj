const app = getApp()
const ajax = require('../../utils/ajax.js')
const util = require('../../utils/util.js')

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

    let params = {
      wjDynamic: null,
      pageQuery:{
        pageSize: 10,
        pageNo: 1
      }
    }

    ajax.HTTP.post(ajax.API.queryPageWjDynamic, params, (e) => {

      let dynamicL = e.data.result
      if(e.data.code == 200){

        dynamicL.forEach((item, index)=>{
          item.wjDynamic.createTime = util.format(new Date(item.wjDynamic.createTime))
        })

        that.setData({
          dynamicList: dynamicL
        })
      }

    }, 'json')

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