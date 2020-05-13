// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   message:"周震南",
   firstname:'fancy',
   lastname:'why',
   isActive:false,
   isShow:true,
   score:45,
   letters:['a','b','c'],
  //  age:20,
   nowTime:new Date().toLocaleString()
  },
  onLoad(){
    setInterval(() =>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    // console.log('------')
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handeSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score +6
    })
  }
  
   
})