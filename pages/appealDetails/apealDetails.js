// pages/appealDetails/apealDetails.js

import http from '../../utils/api.js';
import util from '../../utils/util.js';
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    appealList: [],
    CustomBar: app.globalData.CustomBar,
    previewImgStatus:false,
    currentIndex:0
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
        let appealList = res.result
        that.setData({
          appealList: appealList
        })
      },
      fail: err => {

      }
    })

    

  },


  // 去评论页面
  gotoComment(){

    wx.navigateTo({
      url: '../appealComment/appealComment',
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
  previewImg:function(){
    // wx.previewImage({
    //   current: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/xiaochengxu-readme/channels4_banner.jpg', // 当前显示图片的http链接
    //   urls: ['https://weiju1.oss-cn-shenzhen.aliyuncs.com/xiaochengxu-readme/channels4_banner.jpg'] // 需要预览的图片http链接列表
    // })
    this.setData({
      previewImgStatus:true
    })
  },
  imgChange:function(e){
    let index = e.detail
    this.setData({
      currentIndex:index
    })
  }
})