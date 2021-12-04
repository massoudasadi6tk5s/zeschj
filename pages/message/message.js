// pages/message/message.js

const app = getApp()
const ajax = require('../../utils/ajax.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  pageData: {
    WebSocket: null
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

    let socketUrl = ajax.API.chatSocket + "/9527"
    socketUrl = socketUrl.replace("https","wss").replace("http","ws");

    this.pageData.WebSocket =  wx.connectSocket({
      url: socketUrl,
      header:{
        'content-type': 'application/json'
      },
      success: (e)=>{
        console.log('成功')
      },
      fail: (e)=>{
        console.log(e)
      }
    })

    this.pageData.WebSocket.onMessage(this.cbOnMsg)

  },

  // 发送消息
  sendMsg(){

    let msg = {a: 'Hello', b: 'World',toUserId: '9527'}

    this.pageData.WebSocket.send({
      data: JSON.stringify(msg)
    })
  },

  // 接收消息
  cbOnMsg(e){

    console.log(e)

  },

  // 去消息 对话页面
  gotoMsgDetail(e){

    wx.navigateTo({
      url: '../messageDetail/messageDetail',
    })

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