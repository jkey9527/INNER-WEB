// pages/login/login.ts
import {
  request
} from "../../utils/http"
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user_no: '',
        user_password: '',
    },
    bindinput:function(e){
        let key = e.target.dataset.key
        this.setData({
            [key]:e.detail.value
        })
        // console.log(e)
    },
    submit:function(e){
        wx.reLaunch({
            url:'../index/index'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        request({
            url: '/cattle/inner/token/getToken',
            method: 'POST',
            data: JSON.stringify({
                privateKey: '671bb566-a0b1-43f8-8874-62a9bf40cd1b'
            })
            }).then((res) => {
            if (res.code === 1) {
                wx.setStorageSync('token', res.data)
            }
        })
    },
    login(e) {
        if (this.data.user_no == '') {
            wx.showToast({
                icon: 'none',
                title: '账号不能为空',
            })
        } else if (this.data.user_password == '') {
            wx.showToast({
                icon: 'none',
                title: '密码不能为空',
            })
        } else {
            request({
                url: '/cattle/inner/user/login',
                method: 'POST',
                data: {
                    user_no: this.data.user_no,
                    user_password: this.data.user_password,
                    user_phone: this.data.user_no
                }
            }).then((res) => {
                if (res.code === 1) {
                    app.globalData.user = res.data;
                    wx.setStorageSync('userid', res.data.user_id)
                    wx.reLaunch({
                        url: '../index/index'
                    })
                }else{
                    wx.showToast({
                        title: res.message,
                        icon: 'none'
                    })
                }
            })
        }
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