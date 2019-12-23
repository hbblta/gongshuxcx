const app = getApp()
export default{
  postAjax(urlData,data){
    return new Promise(function (resolve, reject){
      wx.request({
        url: app.globalData.httpUrl + urlData,
        data : data,
        method:'POST',
        success:(res)=>{
          let result = res;
          resolve(result);
        },
        fail:()=>{
          reject("请求fail状态")
        }
      })
    })
  },
  getAjax(urlData){
    return new Promise(function (resolve, reject){
      wx.request({
        url: app.globalData.httpUrl + urlData,
        method:'GET',
        success:(res)=>{
          let result = res;
          resolve(result);
        },
        fail:()=>{
          reject("请求fail状态")
        }
      })
    })
  }
}