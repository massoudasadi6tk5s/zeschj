// pages/appeal/singleDynamic/index.js

const app = getApp()
import http from '../../../utils/api.js';

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
      let appealId = e.currentTarget.dataset.id

      let data = {
        appealId: appealId,
      }

      http.appealToEndorse({
        data,
        success: res => {

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

        },
        fail: err => {

        }
      })



    },

    // 取消点赞
    cancelEndorse(e) {
      let that = this
      let appealId = e.currentTarget.dataset.id

      let data = {
        appealId: appealId
      }

      http.cancelEndorse({
        data,
        success: res => {
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

        },
        fail: err => {
          console.log(err)
        }
      })



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