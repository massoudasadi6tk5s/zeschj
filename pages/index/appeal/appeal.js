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
      //115+图片的高度139(贪心算法)
      ajax.HTTP.post(ajax.API.listPageAppeal, params, function(e) {
        let appealList = e.data.result.records
        let waterfallNum={
          left:0,
          right:0
        }
        appealList.forEach((item, index) => {
          item.wjAppeal.createTime = util.format(new Date(item.wjAppeal.createTime))
          if(waterfallNum.left===waterfallNum.right || waterfallNum.left<waterfallNum.right){
            left.push(item)
            let num = item.appealMaterial.length>0?139:0
            waterfallNum.left+=115+num
          }else{
            right.push(item)
            let num = item.appealMaterial.length > 0 ? 139 : 0
            waterfallNum.right += 115 + num
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