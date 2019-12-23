//index.js
//获取应用实例
const app = getApp()
import ajax from '../../utils/ajax'
Page({
  data: {
    bannerList : [],
    list:[
      {
        name : '家园介绍',
        imgUrl : '../static/index/index5.png',
        url : '../homeLand/homeLand'
      },
      {
        name : '互联网党建',
        imgUrl : '../static/index/index8.png',
        url : '../homeLand/homeLand'
      },
      {
        name : '互联网协会',
        imgUrl : '../static/index/index3.png',
        url : '../homeLand/homeLand'
      },
      {
        name : '企业介绍',
        imgUrl : '../static/index/index4.png',
        url : '../homeLand/homeLand'
      },
      {
        name : '网络治理',
        imgUrl : '../static/index/index6.png',
        url : '../homeLand/homeLand'
      },
      {
        name : '网络正能量',
        imgUrl : '../static/index/index1.png',
        url : '../homeLand/homeLand'
      },
      {
        name : '网络公益',
        imgUrl : '../static/index/index2.png',
        url : '../homeLand/homeLand'
      },
      {
        name : '更多',
        imgUrl : '../static/index/index7.png',
        url : '../homeLand/homeLand'
      },
    ],
    homeland :null
  },
  onShow:function(){
    wx.setNavigationBarTitle({//更换nav栏字段
      title: '拱墅网络家园'
    })
  },
  onLoad: function () {
    ajax.getAjax('banners?pattern=index').then(res=>{
      this.setData({
        bannerList : res.data.data
      })
    })
    ajax.getAjax('categories/8?pattern=full').then(res=>{
      if(res.data.data.children){
        this.setData({
          homeland : res.data.data.children[0].articles[0].photos[0]
        })
      }
    })
  },
  goUrl:function(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
})
