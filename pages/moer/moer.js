// pages/moer/moer.js
const app = getApp()
import ajax from '../../utils/ajax'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list : [],
    indexs : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  indexCheng:function(e){
    this.setData({
      indexs : e.currentTarget.dataset.index
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({//更换nav栏字段
      title: '更多'
    })
    ajax.getAjax('categories/9?pattern=full').then(res=>{
      this.setData({
        list : res.data.data.children
      })
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