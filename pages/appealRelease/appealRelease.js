import http from '../../utils/api.js';
import util from '../../utils/util.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,

    imageArray: [], // 图片
    defaultImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/xiaochengxu-readme/channels4_banner.jpg',
    imgMode: 'aspectFit',
    title: '',
    content: '',
    latitude: '',
    longitude: '',

    // 主要展示用户
    addressHint: '一定要选择距离自己较远的位置',


  },
  pageData: {
    imageModeArray: ["scaleToFill", "aspectFit", "aspectFill", "widthFix", "heightFix",
      "top", "bottom", "center", "left", "right", "top left", "top right", "bottom left", "bottom right"
    ] // 图片展示的方式
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  return (e) {
    wx.navigateBack({
      delta: 2
    })
  },

  // 选择图片
  selectImg() {
    let that = this
    let imgArray = this.data.imageArray
    if (imgArray.length > 4) {
      wx.showToast({
        title: '图片够多啦',
        icon: 'none'
      })
      return
    }
    wx.chooseImage({
      count: 4,
      success: (res) => {
        let tempFilePaths = res.tempFilePaths
        if (imgArray.length + tempFilePaths.length > 4) {
          return wx.showToast({
            title: '图片太多啦',
            icon: 'none'
          })
        }
        let totle = imgArray.length + tempFilePaths.length - 1
        that.setData({
          imageArray: imgArray.concat(tempFilePaths),
          defaultImg: tempFilePaths
        })

      },
    })

  },

  // 点击图片 切换背景图片
  clickImg(e) {
    let index = e.currentTarget.dataset.index
    let imageArray = this.data.imageArray
    this.setData({
      defaultImg: imageArray[index]
    })
  },

  // 记录输入的标题
  inputTitle(e) {

    console.log(e.detail.value)
    this.setData({
      title: e.detail.value
    })

  },

  // 记录输入的内容
  inputContent(e) {

    this.setData({
      content: e.detail.value
    })

  },


  // 保存诉求
  saveAppealOrUploadImg() {

    if(this.data.imageArray.length === 0){
      this.saveAppeal([]);
      return
    }

    let that = this

    wx.showLoading({
      title: '上传中😍',
    })

    // 上传图片
    this.data.imageArray.forEach((item, index) => {

      // 上传好的图片
      let uploadImgList = []

      wx.uploadFile({
        url: 'https://www.weiju.fun/weiju/wjAppealMaterial/uploadMaterial', //仅为示例，非真实的接口地址
        filePath: item,
        header: {
          token: wx.getStorageSync('token')
        },
        name: 'file',
        success(res) {

          let data = res.data
          data = JSON.parse(data)
          uploadImgList.push(data.result)


          // 上传完成了
          if (uploadImgList.length === that.data.imageArray.length) {

            that.saveAppeal(uploadImgList);

          }


        }
      })



    })

  },

  // 保存诉求
  saveAppeal(imgArray){

    let that = this

    let data = {
      title: this.data.title,
      content: this.data.content,
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      materialList: imgArray
    }

    http.addAppeal({
      data,
      success: res => {
        if (res.code === '00000') {

          wx.hideLoading()
          that.clearData();

          wx.showToast({
            title: '发送成功',
          })
        }
      },
      fail: err => {

        wx.hideLoading()

      }
    })

  },


  // 打开地图选择位置
  handleOpenMap() {

    let that = this

    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        let latitude = res.latitude
        let longitude = res.longitude

        wx.chooseLocation({
          latitude,
          longitude,
          success: (result) => {

            let lat = result.latitude
            let log = result.longitude
            that.setData({
              latitude: lat,
              longitude: log,
              addressHint: result.name
            })

          },
        })
      }
    })

  },

  // 清空数据
  clearData() {
    this.setData({
      imageArray: [],
      title: '',
      content: '',
      latitude: '',
      longitude: '',
      addressHint: '一定要选择距离自己较远的位置'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})