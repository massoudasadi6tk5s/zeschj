// pages/dynamicPage/singleDynamic/index.js
const app = getApp()

import http from '../../../utils/api.js';
import util from '../../../utils/util.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dynamicList: {
      type: Array
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

      // 动态点赞
  addDynamicEndorse(e) {

    let that = this
    let id = e.currentTarget.dataset.id

    let data = {
      dynamicId: id,
    }

    http.dynamicEndorse({
      data,
      success: res => {

        let dynamicList = that.data.dynamicList

        dynamicList.forEach((item, index) => {

          if (item.dynamicId == id) {
            dynamicList[index].isEndorse = true
            dynamicList[index].endorseCount = dynamicList[index].endorseCount + 1
          }

        })

        that.setData({
          dynamicList: dynamicList
        })


      },
      fail: err => {

      }

    })


  },

  // 取消点赞
  cancelEndorse(e) {

    let that = this
    let id = e.currentTarget.dataset.id

    let data = {
      dynamicId: id
    }

    http.cancelEndorse({
      data,
      success: res => {

        let dynamicList = that.data.dynamicList

        dynamicList.forEach((item, index) => {

          if (item.dynamicId == id) {
            dynamicList[index].isEndorse = false
            dynamicList[index].endorseCount = dynamicList[index].endorseCount - 1
          }

        })

        that.setData({
          dynamicList: dynamicList
        })



      },
      fail: err => {

      }
    })

  },

  }
})
