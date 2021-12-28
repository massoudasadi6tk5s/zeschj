// pages/messageDetail/messageDetail.js

const app = getApp()
const ajax = require('../../utils/ajax.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: null,
    msgList: []

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

    let userInfo = wx.getStorageSync('userInfo')

    this.pageData.chatId = options.chatId

    // 查询到聊天人的信息
    ajax.HTTP.get(ajax.API.queryChatUser + "/" + options.chatId, null, (e) => {

      let result = e.data.result

      result.forEach((item, index) => {

        if (item.userId != userInfo.userId) {
          that.pageData.dialogueUserId = item.userId
          console.log(item.userId)
        }

      })



      console.log()

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

    this.connectSocket()
    this.queryPageWjChatRecord()

  },

  // 连接 websocket
  connectSocket(e) {

    let userId = wx.getStorageSync('userInfo').userId

    let socketUrl = ajax.API.chatSocket + "/" + userId
    socketUrl = socketUrl.replace("https", "wss").replace("http", "ws");

    this.pageData.WebSocket = wx.connectSocket({
      url: socketUrl,
      header: {
        'content-type': 'application/json'
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

    if (!this.data.msg) {
      wx.showToast({
        title: '不可为空',
        icon: "none"
      })
      return
    }

    let msg = {
      chatId: this.pageData.chatId,
      msg: this.data.msg,
      toUserId: this.pageData.dialogueUserId
    }

    let msgList = this.data.msgList
    let param = {
      isMe: true,
      content: this.data.msg
    }
    msgList.push(param)

    this.pageData.WebSocket.send({
      data: JSON.stringify(msg)
    })
    this.setData({
      msgList: msgList,
      msg: null
    })
  },

  // 接收消息
  cbOnMsg(e) {

    console.log(e)

    let that = this
    let userInfo = wx.getStorageSync('userInfo')

    if (e.data == '连接成功') {
      return
    }

    let msgObj = JSON.parse(e.data)
    if (msgObj.chatId == this.pageData.chatId && msgObj.toUserId == userInfo.userId) {

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

    let params = {
      wjChatRecord: {
        chatId: that.pageData.chatId
      },
      pageQuery: {
        pageSize: 20,
        pageNo: 1
      }
    }

    ajax.HTTP.post(ajax.API.queryPageWjChatRecord, params, (e) => {

      console.log(e)
      let userInfo = wx.getStorageSync('userInfo')
      let result = e.data.result

      result.forEach((item, index) => {

        item.isMe = false

        if (item.userId == userInfo.userId) {
          item.isMe = true
        }

      })

      that.setData({
        msgList: result.reverse()
      })

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