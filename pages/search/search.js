// pages/search/search.js
import { network } from "../../utils/network.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    onSearchItem: function(event) {
        console.log("搜索页面");
        console.log(event);
        var that = this;
        var q = event.detail.value;
        network.getSearch({
            q: q,
            success: function(subjects) {
                that.setData({
                    subjects: subjects
                });
            },
            fail: function(msg) {
                console.log(msg);
            },
            completet: function(msg) {
                console.log(msg);
            }

        });
    },
    // js代码控制，没有用页面上navigater组件，因为navigater没有办法记住用户点击的是那个item,通过js可以处理不同的
    // 业务逻辑
    onItemTapEvent: function(event) {
        console.log(event);
        var id = event.currentTarget.dataset.id;
        wx.navigateTo({ url: '/pages/detail/detail?type=movie&id=' + id });
    }
})