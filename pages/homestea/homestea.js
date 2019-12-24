// pages/homeLand/homeLand.js
import ajax from '../../utils/ajax'
var WxParse = require('../../wxParse/wxParse.js');
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
    ],
  },
  indexChange:function(e){ 
    this.setData({
      indexs : e.currentTarget.dataset.index
    })
    var index = e.currentTarget.dataset.index + 1
    ajax.getAjax('articles/'+index).then(res=>{
      var that = this;
      var article = res.data.data.body;
      WxParse.wxParse('article', 'html', article, that,5);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({//更换nav栏字段
      title: '家园介绍'
    })
    var loadIndex = {
      currentTarget : {
        dataset : {
          index : 0
        }
      }
    }
    this.indexChange(loadIndex)
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