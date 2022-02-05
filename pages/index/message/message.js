// pages/index/message/message.js

const app = getApp()
const ajax = require('../../../utils/ajax.js')
const util = require('../../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    chatList: []
  },
  ready:function(){
    this.queryAllChat()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 去消息 对话页面
    gotoMsgDetail(e) {
      let chatId = e.currentTarget.dataset.chatId
      wx.navigateTo({
        url: '../messageDetail/messageDetail?chatId=' + chatId,
      })

    },

    // 查询用户所有的 聊天室/聊天列表
    queryAllChat() {
      let that = this
      let userInfo = wx.getStorageSync('userInfo')
      ajax.HTTP.get(ajax.API.queryAllChat + "/" + userInfo.userId, null, (e) => {
        let result = e.data.result
        result.forEach((item, index) => {
          item.createTime = util.format(new Date(item.createTime))
        })

        that.setData({
          chatList: result
        })
      }, 'json')
    }
  }
})