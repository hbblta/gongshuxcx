// pages/ISOC/ISOC.js
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
    var that = this;
    var article = this.data.list[e.currentTarget.dataset.index].body;
    WxParse.wxParse('article', 'html', article, that,5);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({//更换nav栏字段
      title: '互联网协会'
    })
    ajax.getAjax('categories/3?pattern=full').then(res=>{
      var that = this;
      this.setData({
        list : res.data.data.articles
      })
      var article = res.data.data.articles[0].body;
      WxParse.wxParse('article', 'html', article, that,5);
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