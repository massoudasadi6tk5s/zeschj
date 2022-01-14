// pages/message/message.js

const app = getApp()
const ajax = require('../../utils/ajax.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatList: []
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
    
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    this.queryAllChat()

  },


  // 去消息 对话页面
  gotoMsgDetail(e){

    let chatId = e.currentTarget.dataset.chatId

    wx.navigateTo({
      url: '../messageDetail/messageDetail?chatId='+ chatId ,
    })

  },

  // 查询用户所有的 聊天室/聊天列表
  queryAllChat(e){

    let that = this

    let userInfo = wx.getStorageSync('userInfo')

    ajax.HTTP.get(ajax.API.queryAllChat + "/" + userInfo.userId, null, (e)=>{


      let result = e.data.result

      result.forEach((item, index)=>{

        item.createTime = util.format(new Date(item.createTime))

      })

      that.setData({
        chatList: result
      })
      

    }, 'json')

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