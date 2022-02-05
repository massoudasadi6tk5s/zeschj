// pages/index/dynamic/dynamic.js
const app = getApp()
const ajax = require('../../../utils/ajax.js')
const util = require('../../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass: true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    dynamicList: {}
  },
  ready: function() {
    let that = this
    let userInfo = wx.getStorageSync('userInfo')

    let params = {
      wjDynamic: null,
      wjUser: userInfo,
      pageQuery: {
        pageSize: 10,
        pageNo: 1
      }
    }

    ajax.HTTP.post(ajax.API.queryPageWjDynamic, params, (e) => {

      let dynamicL = e.data.result.records
      if (e.data.code == 200) {

        dynamicL.forEach((item, index) => {
          item.wjDynamic.createTime = util.format(new Date(item.wjDynamic.createTime))
        })

        that.setData({
          dynamicList: dynamicL
        })
      }

    }, 'json')
  },
  /**
   * 组件的方法列表
   */
  methods: {

    // 动态点赞
    addDynamicEndorse(e) {
      let that = this
      let userInfo = wx.getStorageSync('userInfo')
      let id = e.currentTarget.dataset.id

      let params = {
        dynamicId: id,
        userId: userInfo.userId
      }

      ajax.HTTP.post(ajax.API.addDynamicEndorse, params, (e) => {

        let dynamicList = that.data.dynamicList

        if (e.data.code == 200) {

          dynamicList.forEach((item, index) => {

            if (item.wjDynamic.dynamicId == id) {
              dynamicList[index].isEndorse = true
              dynamicList[index].wjDynamic.endorseCount = dynamicList[index].wjDynamic.endorseCount + 1
            }

          })

          that.setData({
            dynamicList: dynamicList
          })

        }

      }, 'json')

    },

    // 取消点赞
    cancelEndorse(e) {

      let that = this
      let userInfo = wx.getStorageSync('userInfo')
      let id = e.currentTarget.dataset.id

      let params = {
        dynamicId: id,
        userId: userInfo.userId
      }


      ajax.HTTP.delete(ajax.API.cancelEndorse, params, (e) => {

        let dynamicList = that.data.dynamicList

        if (e.data.code == 200) {

          dynamicList.forEach((item, index) => {

            if (item.wjDynamic.dynamicId == id) {
              dynamicList[index].isEndorse = false
              dynamicList[index].wjDynamic.endorseCount = dynamicList[index].wjDynamic.endorseCount - 1
            }

          })

          that.setData({
            dynamicList: dynamicList
          })

        }

      }, 'json')

    }
  }
})