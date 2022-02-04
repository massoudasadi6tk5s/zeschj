// custom-tab-bar/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick: function (e) {
      console.log(e)
      let tab = e.currentTarget.dataset.tab
      switch (tab) {
        case "index":
          wx.switchTab({
            url: '/pages/appeal/appeal',
          })
          break;
        case "dynamic":
          wx.switchTab({
            url: '/pages/dynamicPage/dynamicPage',
          })
          break;
        case "message":
          wx.switchTab({
            url: '/pages/message/message',
          })
          break;
        case "my":
          wx.switchTab({
            url: '/pages/my/myProfile/myProfile',
          })
      }

    }
  }
})