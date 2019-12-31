// pages/Internet/Internet.js
const app = getApp()
import ajax from '../../utils/ajax'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList : [],
    list:[
      {
        name : '基本情况',
        id : 1
      },
      {
        name : '重点党组织',
        id : 2
      },
      {
        name : '党员风采',
        id : 3
      },
    ],
    msgList :[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  ToText:function(HTML){
    let input = HTML;
    return input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({//更换nav栏字段
      title: '互联网党建'
    })
    // ajax.getAjax('categories/3?pattern=full').then(res=>{
    //   this.setData({
    //     list:res.data.data.children
    //   })
    // })
    ajax.getAjax('banners?scene=internet').then(res=>{
      this.setData({
        bannerList : res.data.data
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
  goUrl:function(e){
    if(e.currentTarget.dataset.type == 'text'){
      wx.navigateTo({
        url: '../textImg/textImg?id='+e.currentTarget.dataset.id+'&titles=互联网党建',
      })
    }else{
      wx.navigateTo({
        url: '../videosHtml/videosHtml?id='+e.currentTarget.dataset.id+'&titles=互联网党建',
      })
    }
  },
  indexChange:function(e){ 
    this.setData({
      indexs : e.currentTarget.dataset.index
    })
    ajax.getAjax('articles?categoryId=1'+e.currentTarget.dataset.index+'&from=0&size=100').then(res=>{
      this.setData({
        msgList : res.data.data.items
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