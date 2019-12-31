// pages/homeLand/homeLand.js
import ajax from '../../utils/ajax'
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexs:0,
    list:[],
  },
  indexChange:function(e){ 
    this.setData({
      indexs : e.currentTarget.dataset.index
    })
    var that = this
    console.log(this.data.list)
    var article = this.data.list[e.currentTarget.dataset.index].body;
    WxParse.wxParse('article', 'html', article, that,5);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({//更换nav栏字段
      title: '家园介绍'
    })
    ajax.getAjax('categories/1?pattern=full').then(res=>{
      this.setData({
        list : res.data.data.articles
      })
      var loadIndex = {
        currentTarget : {
          dataset : {
            index : 0
          }
        }
      }
      this.indexChange(loadIndex)
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