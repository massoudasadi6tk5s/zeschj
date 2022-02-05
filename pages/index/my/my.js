// pages/index/my/my.js
const app = getApp()
const ajax = require('../../../utils/ajax.js')
const util = require('../../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    userInfo: {},
    myAppealList: [],
    swiperHeight: 2400,
    pageNO: 1,
    pageSize: 10
  },
  ready:function(){
    let userInfo = wx.getStorageSync("userInfo")
    if (!userInfo) {
      wx.navigateTo({
        url: '/pages/welcome/welcome',
      })
      return
    }
    this.setData({
      userInfo: userInfo
    })
    this.loadMyData()
    this.loadMyAppeal()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 去编辑页面
    gotoEditProfile() {
      wx.navigateTo({
        url: '/pages/my/editProfile/editProfile',
      })
    },

    // 加载我的一些信息 (诉求、动态、点赞 次数)
    loadMyData() {

      let that = this
      let userInfo = wx.getStorageSync("userInfo")

      let params = {
        userId: userInfo.userId
      }

      ajax.HTTP.post(ajax.API.getByIdUserData, params, (e) => {

        that.setData({
          userInfo: e.data.result
        })

        wx.setStorageSync('userInfo', e.data.result)

      })

    },
    // 查询我的诉求
    loadMyAppeal() {

      let that = this
      let userInfo = wx.getStorageSync('userInfo')

      let params = {
        wjUser: userInfo,
        pageQuery: this.pageData

      }

      ajax.HTTP.post(ajax.API.listByUserIdMyAppeal, params, (e) => {
        let appealList = e.data.result.records
        appealList.forEach((item, index) => {
          item.wjAppeal.createTime = util.format(new Date(item.wjAppeal.createTime))
        })
        that.setData({
          myAppealList: appealList,
          swiperHeight: 600 * appealList.length
        })
      })

    }
  }
})