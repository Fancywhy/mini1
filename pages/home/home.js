// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handleIncrement(){
    console.log('--------')
    this.setData({
      counter:this.data.counter+1
    })
  },
  tabControlClick(event){
    console.log(event)
  },
  handleIncrementCpn(){
    const my_sel = this.selectComponent('.sel-class')
    console.log(my_sel)

    my_sel.incrementCounter(10)
  }

})