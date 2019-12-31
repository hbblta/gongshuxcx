// pages/textImg/textImg.js
import ajax from '../../utils/ajax'
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title : '',
    body: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(/^%/.test(options.titles)){
      wx.setNavigationBarTitle({//更换nav栏字段
        title: '详情'
      })
    }else{
      wx.setNavigationBarTitle({//更换nav栏字段
        title: options.titles
      })
    }
    

    ajax.getAjax('articles/'+options.id).then(res=>{
      var that = this;
      var article = res.data.data.body;
      this.setData({
        title : res.data.data.title
      })
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