// pages/warehousing/warehousing.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        typeArr:[{label:'上衣',value:1,},{label:'基础打底',value:2},{label:'外套',value:3},{label:'套装',value:4},{label:'裤子',value:5},{label:'半裙',value:6},{label:'连衣裙',value:7}],
        type:0,
        colorArr:[{label:'黑',value:1},{label:'白',value:2},{label:'灰',value:3},{label:'咖',value:4},{label:'其他',label:5}],
        color:0,
        sizeArr:[{label:'均码',value:1},{label:'S',value:2},{label:'M',value:3},{label:'L',value:4}],
        size:0,
        countArr:[{label:'1',value:1},{label:'2',value:2},{label:'3',value:3},{label:'4',value:4},{label:'5',value:5},{label:'6',value:6},{label:'7',value:7},{label:'8',value:8},{label:'9',value:9},{label:'10',value:10},{label:'0',value:0}],
        count:0,
        moreArr:[{color:'',size:'',count:'',key:1}],
        showMore:false,
    },
    bindinput:function(e){
        let val = e.detail.value
        if(val){
            this.setData({
                showMore:true
            })
        }else{
            this.setData({
                showMore:false
            })
        }
    },
  bindPickerChange: function(e) {
      let ref = e.target.dataset.ref
    //   let arr = this.data[ref+'Arr'][e.detail.value]
    // console.log(ref,e.detail.value,arr)
    this.setData({
      [ref]: e.detail.value
    })
  },
  add:function(e){
      let arr = this.data.moreArr
      let add = [...arr,{color:'',size:'',count:'',key:arr.length+1}]
      this.setData({
          moreArr:add
      })
  },
    delete:function(e){
        let arr = this.data.moreArr
        let key = e.target.dataset.key
        arr.splice(key,1)
        this.setData({
            moreArr:arr
        })
    },
    cancel:function(e){
        wx.reLaunch({
            url:'../index/index'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})