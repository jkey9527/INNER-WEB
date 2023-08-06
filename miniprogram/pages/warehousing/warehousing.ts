// pages/warehousing/warehousing.ts
import {
  request
} from "../../utils/http"
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        data:{},
        typeArr:[{label:'上衣',value:1,},{label:'基础打底',value:2},{label:'外套',value:3},{label:'套装',value:4},{label:'裤子',value:5},{label:'半裙',value:6},{label:'连衣裙',value:7}],
        type:0,
        colorArr:[{label:'黑',value:1},{label:'白',value:2},{label:'灰',value:3},{label:'咖',value:4},{label:'其他',value:5}],
        color:[0],
        sizeArr:[{label:'均码',value:1},{label:'S',value:2},{label:'M',value:3},{label:'L',value:4}],
        size:[0],
        numArr:[{label:'1',value:1},{label:'2',value:2},{label:'3',value:3},{label:'4',value:4},{label:'5',value:5},{label:'6',value:6},{label:'7',value:7},{label:'8',value:8},{label:'9',value:9},{label:'10',value:10},{label:'0',value:0}],
        num:[0],
        productDetailBeans:[]
    },
  bindPickerChange: function(e) {
      let ref = e.target.dataset.ref
      let arr = this.data[ref+'Arr'][e.detail.value]
        if(ref=='type'){
            this.setData({
                [ref]: e.detail.value
            })
        }else{
            let _this = this
            let value = [...this.data.productDetailBeans]
            let inx = e.target.dataset.name
            value[inx]['pro_det_'+ref] = arr.value
            let refs = _this.data[ref]
            refs[inx] = e.detail.value
            this.setData({
                productDetailBeans: value,
                [ref]:refs,
            })
        }
  },
  add:function(e){
      let _this = this
      let arr = this.data.productDetailBeans
     let add = [...arr,{pro_det_color:this.data.colorArr[0].value,pro_det_size:this.data.sizeArr[0].value,pro_det_num:this.data.numArr[0].value,key:arr.length+1}]

      this.setData({
          productDetailBeans:add,
          color:[..._this.data.color,0],
          size:[..._this.data.size,0],
          num:[..._this.data.num,0]
      })
  },
    delete:function(e){
        let _this = this
        let arr = this.data.productDetailBeans
        let key = e.target.dataset.key
        arr.splice(key,1)
        this.setData({
            productDetailBeans:arr,
            color:_this.data.color.splice(key,1),
            size:_this.data.size.splice(key,1),
            num:_this.data.num.splice(key,1)
        })
    },
    cancel:function(e){
        wx.reLaunch({
            url:'../index/index'
        })
    },
  formSubmit(e){
      let _this = this
      let pro_type = this.data.typeArr[this.data.type].value
      let val = e.detail.value
      let params = {
          ...val,
          pro_type:pro_type,
          pro_name:val.pro_no,
          productDetailBeans:this.data.productDetailBeans
      }
      request({
                url: '/cattle/inner/product/saveProduct',
                method: 'POST',
                data: {
                   ...params
                }
            }).then((res) => {
                if (res.code === 1) {
                    wx.showModal({
                        title: '操作成功',
                        content: '是否继续录入？',
                        confirmText:'继续录入',
                        cancelText:'返回首页',
                        success (res) {
                            if (res.confirm) {
                                let add = [{pro_det_color:_this.data.colorArr[0].value,pro_det_size:_this.data.sizeArr[0].value,pro_det_num:_this.data.numArr[0].value,key:1}]
                                _this.setData({
                                    data:{
                                        pro_no:'',
                                        pro_real_price:'',
                                        pro_price:'',
                                        pro_sell_price:'',
                                    },
                                    productDetailBeans:add,
                                    color:[0],
                                    size:[0],
                                    num:[0],
                                })
                            // console.log('用户点击确定')
                            } else if (res.cancel) {
                                 wx.reLaunch({
                                    url: '../index/index'
                                })
                            }
                        }
                    })
                }else{
                    wx.showToast({
                        title: res.message,
                        icon: 'none'
                    })
                }
            })
      console.log(params)
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        let arr = [{pro_det_color:this.data.colorArr[0].value,pro_det_size:this.data.sizeArr[0].value,pro_det_num:this.data.numArr[0].value,key:1}]
        this.setData({
            productDetailBeans:arr
        })
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