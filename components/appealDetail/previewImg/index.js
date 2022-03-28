// components/appealDetail/previewImg/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    imgs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgCurrentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cancelPreview: function () {
      this.setData({
        show: false
      })
    },
    tabClick: function (e) {
      let index = e.currentTarget.dataset.index
      this.setData({
        imgCurrentIndex: index
      })
      this.triggerEvent('imgChange',index)
    },
    swiperChange: function (e) {
      let index = e.detail.current
      let source = e.detail.source
      if (source === "touch") {
        this.setData({
          imgCurrentIndex: index
        })
        this.triggerEvent('imgChange',index)
      }
    }
  }
})