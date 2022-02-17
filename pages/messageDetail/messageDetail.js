// pages/messageDetail/messageDetail.js

const app = getApp()

import http from '../../utils/api.js';
import util from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: null,
    msgList: [],
    CustomBar: app.globalData.CustomBar,
    currentChatId: "" //当前滚动位置的id
  },
  pageData: {
    chatId: null, // 聊天室id
    WebSocket: null, // websocket 对象，用来操作socket
    dialogueUserId: null // 对话人的用户id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this
    let wjUser = wx.getStorageSync('wjUser')

    let data = {
      chatId: options.chatId
    }

    http.queryChatUser({
      data,
      success: res => {

        let result = res.result

        result.forEach((item, index) => {

          if (item.userId != wjUser.userId) {
            that.pageData.dialogueUserId = item.userId
          }

        })

      },
      fail: err => {

      }
    })

    this.pageData.chatId = options.chatId


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

    this.connectSocket()
    this.queryPageWjChatRecord()

  },

  // 连接 websocket
  connectSocket(e) {

    let app = getApp();
    let token = wx.getStorageSync('token')
    let socketUrl = app.globalData.chatSocket + "/" + token
    socketUrl = socketUrl.replace("https", "wss").replace("http", "ws");

    this.pageData.WebSocket = wx.connectSocket({
      url: socketUrl,
      header: {
        'content-type': 'application/json',
        'token': token
      },
      success: (e) => {
        console.log('成功')
      },
      fail: (e) => {
        console.log(e)
      }
    })

    this.pageData.WebSocket.onMessage(this.cbOnMsg)

  },

  // 发送消息
  sendMsg() {
    let msg, param, msgList
    if (!this.data.msg) {
      return wx.showToast({
        title: '不可为空哦~',
        icon: "none"
      })
    }
    //展示到页面
    msgList = this.data.msgList
    param = {
      isMe: true,
      content: this.data.msg
    }
    msgList.push(param)
    //发送到服务器
    msg = {
      chatId: this.pageData.chatId,
      msg: this.data.msg,
      toUserId: this.pageData.dialogueUserId
    }
    this.pageData.WebSocket.send({
      data: JSON.stringify(msg)
    })
    this.setData({
      msgList: msgList,
      msg: null,
      currentChatId: "chat_" + (msgList.length - 1)
    })
  },

  // 接收消息
  cbOnMsg(e) {
    let that = this
    let wjUser = wx.getStorageSync('wjUser')
    if (e.data == '连接成功') {
      return
    }
    let msgObj = JSON.parse(e.data)
    if (msgObj.chatId == this.pageData.chatId && msgObj.toUserId == wjUser.userId) {

      let msgList = that.data.msgList

      let param = {
        isMe: false,
        content: msgObj.msg
      }

      msgList.push(param)

      that.setData({
        msgList: msgList
      })



    }


  },

  return (e) {
    wx.navigateBack({
      delta: 2
    })
  },


  // 消息输入监控
  sendInput(e) {

    console.log(e.detail.value)

    this.setData({
      msg: e.detail.value
    })

  },

  // 查询消息记录
  queryPageWjChatRecord(e) {

    let that = this

    let data = {
      chatId: that.pageData.chatId,
      pageQuery: {
        pageSize: 20,
        pageNo: 1
      }
    }

    http.pageChatRecord({
      data,
      success: res => {

        let wjUser = wx.getStorageSync('wjUser')
        let result = res.result.records

        result.forEach((item, index) => {
          item.isMe = false
          if (item.userId == wjUser.userId) {
            item.isMe = true
          }

        })
        that.setData({
          msgList: result.reverse(),
          currentChatId: "chat_" + (result.length - 1)
        })

      },
      fail: err => {

      }
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