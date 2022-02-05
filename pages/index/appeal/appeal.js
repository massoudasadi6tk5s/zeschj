// pages/index/appeal/appeal.js
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
    // 被点击的导航菜单索引
    CustomBar: app.globalData.CustomBar,
    currentIndexNav: 0,
    isLoading: true,
    // 导航
    navList: [{
        "text": "最热",
        "id": 1
      },
      {
        "text": "最新",
        "id": 2
      },
      {
        "text": "附近",
        "id": 3
      }

    ],
    current: 0,
    pageNO: 1,
    pageSize: 10,
    leftAppealList: [], // 左侧诉求集合
    rightAppealList: [] // 右侧诉求集合
  },
  ready() {
    console.log(this.pageData)
    this.getAppealList()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    activeNav(e) {
      this.setData({
        currentIndexNav: e.target.dataset.index,
        current: e.target.dataset.index
      })
    },
    getAppealList: function() {
      let that = this
      let userInfo = wx.getStorageSync('userInfo')
      let left = this.data.leftAppealList
      let right = this.data.rightAppealList
      let params = {
        wjUser: userInfo,
        pageQuery: {
          pageNO: this.data.pageNO,
          pageSize: this.data.pageSize
        }
      }
      ajax.HTTP.post(ajax.API.listPageAppeal, params, function(e) {
        let appealList = e.data.result.records
        appealList.forEach((item, index) => {
          if (index % 2 == 0) {
            item.wjAppeal.createTime = util.format(new Date(item.wjAppeal.createTime))
            left.push(item)
          } else {
            item.wjAppeal.createTime = util.format(new Date(item.wjAppeal.createTime))
            right.push(item)
          }
        })
        that.setData({
          leftAppealList: left,
          rightAppealList: right,
          isLoading: false
        })

      }, 'json')
    }
  }
})