// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  imagePath:''
  },
  handleChooseAlbum(){
    //系统api，让用户在相册中旋转图片（或者拍照）
    wx.chooseImage({
    success:(res)=>{
      //取出路径
      const path =res.tempFilePaths[0]
      //设置imagepath
      this.setData({
        imagePath:path
      })
    }
    })
  },
  handlemageLoad(){
    console.log('图片加载完成')
  }
})