// template/customNavHeader/customNavHeader.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  properties: {
    isBack: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack() {
      //返回键
      wx.navigateBack({
        delta: 1
      });
    }
  }
})