// pages/appeal/singleDynamic/index.js

const app = getApp()
const ajax = require('../../../utils/ajax.js')
const util = require('../../../utils/util.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 为诉求点赞
    appealEndorse(e) {

      let that = this
      let userInfo = wx.getStorageSync('userInfo')
      let appealId = e.currentTarget.dataset.id

      let params = {
        appealId: appealId,
        userId: userInfo.userId,
        createBy: userInfo.userId
      }

      ajax.HTTP.post(ajax.API.appealToEndorse, params, (e) => {

        // 改变值

        let dataList = that.data.data
        dataList.forEach((item, index) => {
          if (item.appealId == appealId) {
            dataList[index].isEndorse = true
            dataList[index].endorseCount = dataList[index].endorseCount + 1
          }
        })
        that.setData({
          data: dataList
        })


      }, 'json')

    },

    // 取消点赞
    cancelEndorse(e) {
      let that = this
      let userInfo = wx.getStorageSync('userInfo')
      let appealId = e.currentTarget.dataset.id

      let params = {
        appealId: appealId,
        userId: userInfo.userId,
      }

      ajax.HTTP.delete(ajax.API.cancelEndorse, params, (e) => {
        console.log(e)

        // 改变值
        let dataList = that.data.data
        dataList.forEach((item, index) => {
          if (item.appealId == appealId) {
            dataList[index].isEndorse = false
            dataList[index].endorseCount = dataList[index].endorseCount - 1
          }
        })
        that.setData({
          data: dataList
        })


      }, 'json')


    },

    // 进入诉求详情
    gotoDetails(e) {

      let id = e.currentTarget.dataset.id

      wx.navigateTo({
        url: '/pages/appealDetails/apealDetails?appealId=' + id
      })

    },

  }
})