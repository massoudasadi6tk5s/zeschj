import http from '../../../utils/api.js';

const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {

    wjUser: {},
    headPortrait: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let wjUser = wx.getStorageSync('wjUser')

    this.setData({
      wjUser: wjUser
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

  // 选择文件
  uploadHeadPortrait(){

    let that = this

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片

        that.setData({
          headPortrait: res.tempFilePaths
        })

      }
    })

  },

  
  // 修改用户资料
  updateUser(e){

    let that = this
    let data = e.detail.value
    let uploadImg = that.data.headPortrait[0]

    wx.uploadFile({
      url: app.globalData.host + '/wjUser/uploadMaterial', //仅为示例，非真实的接口地址
      filePath: uploadImg,
      name: 'file',
      header: { 
        'token': wx.getStorageSync("token"),  //如果需要token的话要传
      },
      success (res){


        let data = JSON.parse(res.data)

        if(data.code == 200){

          data.headPortrait = data.result

          http.updateUser({
            data,
            success: res => {
              
              if(res.code === 200){
      
                wx.setStorageSync('wjUser', res.result)
      
                wx.showToast({
                  title: '修改成功',
                })
      
              }
              
            },
            fail: err => {}
          })

        }

        
      },
      fail(err){
        console.log(err)
      }
    })


    


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