// pages/homeLand/homeLand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexs:0,
    list:[
      {
        name : '指导思想',
        id : 1
      },
      {
        name : '基本原则',
        id : 2
      },
      {
        name : '功能区块',
        id : 3
      },
      {
        name : '参与方式',
        id : 4
      },
    ]
  },
  indexChange:function(e){
    this.setData({
      index : e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({//更换nav栏字段
      title: '拱墅网络家园'
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