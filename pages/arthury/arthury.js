// pages/arthury/arthury.js
const app = getApp()
import ajax from '../../utils/ajax'
Page({

  /**
   * 页面的初始数据
   */
  data: {
     list:[],
     indexs : 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  goUrl:function(e){
    if(e.currentTarget.dataset.type == 'text'){
      wx.navigateTo({
        url: '../textImg/textImg?id='+e.currentTarget.dataset.id+'&titles=网络正能量',
      })
    }else{
      wx.navigateTo({
        url: '../videosHtml/videosHtml?id='+e.currentTarget.dataset.id+'&titles=网络正能量',
      })
    }
  },
  indexChange:function(e){ 
    this.setData({
      indexs : e.currentTarget.dataset.index
    })
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({//更换nav栏字段
      title: '网络正能量'
    })
    ajax.getAjax('categories/6?pattern=full').then(res=>{
      this.setData({
        list:res.data.data.children
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