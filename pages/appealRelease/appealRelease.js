
import http from '../../utils/api.js';
import util from '../../utils/util.js';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageArray: [], // 图片
    imgIndex: 0,
    defaultImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/xiaochengxu-readme/channels4_banner.jpg',
    imgMode: 'aspectFit',
    title: '',
    content: ''
  },
  pageData:{
    imageModeArray: ["scaleToFill", "aspectFit", "aspectFill", "widthFix", "heightFix",
      "top", "bottom", "center", "left", "right", "top left", "top right", "bottom left", "bottom right"
    ] // 图片展示的方式
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  return(e) {
    wx.navigateBack({
      delta: 2
    })
  },

  // 选择图片
  selectImg(){

    let that = this
    let imgArray = this.data.imageArray

    if(imgArray.length>4){
      wx.showToast({
        title: '图片够多啦',
        icon: 'none'
      })
      return
    }

    wx.chooseImage({
      count: 4,
      success: (res)=>{
        let tempFilePaths = res.tempFilePaths

        if (imgArray.length + tempFilePaths.length >4){
          wx.showToast({
            title: '图片太多啦',
            icon: 'none'
          })
          return
        }

        let totle = imgArray.length + tempFilePaths.length - 1 

        that.setData({
          imageArray: imgArray.concat(tempFilePaths),
          imgIndex: totle
        })

      },
    })

  },

  // 点击图片 切换背景图片
  clickImg(e){
    let that = this
    let index = e.currentTarget.dataset.index
    let imgIndex = this.data.imgIndex

    let imageArray = this.data.imageArray

    if(imgIndex == index){
      let imageModeArray = this.pageData.imageModeArray
      
      for (let i = 0; i < imageModeArray.length; i++) {
        if (imageModeArray[i] == 'bottom right') {
          that.setData({
            imageArray: []
          })
          that.setData({
            imageArray: imageArray,
            imgMode: imageModeArray[0]
          })
          break;
        } else if (that.data.imgMode == imageModeArray[i]) {
          that.setData({
            imageArray: []
          })
          that.setData({
            imageArray: imageArray,
            imgMode: imageModeArray[i + 1]
          })
          break;
        }
      }

      

    }

    this.setData({
      imgIndex: index
    })

  },

  // 记录输入的标题
  inputTitle(e){

    console.log(e.detail.value)
    this.setData({
      title: e.detail.value
    })

  },

  // 记录输入的内容
  inputContent(e){

    this.setData({
      content: e.detail.value
    })

  },


  // 保存诉求
  saveAppeal(){

    let data = {
      title: this.data.title,
      content: this.data.content
    }

    http.addAppeal({
      data,
      success: res => {

        if(res.code === 200){
          wx.showToast({
            title: '发送成功',
          })
        }

      },
      fail: err => {

      }
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