// pages/sales/sales.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        menuArr:[{label:'今日',value:1},{label:'本周',value:2},{label:'本月',value:3},{label:'本年',value:4},{label:'自定义',value:5}],
        curMenu:1,
        typeArr:[{label:'上衣',value:1,},{label:'基础打底',value:5},{label:'外套',value:1},{label:'套装',value:3},{label:'裤子',value:5},{label:'半裙',value:1},{label:'连衣裙',value:2}],
        saleArr:[{label:'卡',value:3200,},{label:'现金',value:1050},{label:'共计',value:4250}],
        startTime:'',
        endTime:'',
    },
    bindDateChange: function(e) {
        let ref = e.target.dataset.ref
        this.setData({
            [ref]: e.detail.value
        })
    },
    bindtapMenu:function(e){
        let val = this.data.menuArr[e.currentTarget.dataset.key].value
        this.setData({
            curMenu:val
        })
        // console.log()
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