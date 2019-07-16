// pages/list/list.js
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
        console.log("获取数据");
        var type = options.type;
        console.log("type----" + type);
        var that = this;
        var title = "";
        if (type === 'movie') {
            // 请求电影
            network.getMoviesList({
                success: function(movies) {
                    that.setData({
                        items: movies
                    })
                },
                fail: function(msg) {
                    console.log(msg);
                },
                complete: function(msg) {
                    console.log("首页电影回调 " + msg);
                },
                count: 1000,
            })
            title = "电影";
        } else if (type === 'tv') {
            // 请求电视
            network.getTvsList({
                success: function(tvs) {
                    that.setData({
                        items: tvs
                    })
                },
                fail: function(msg) {
                    console.log(msg);
                },
                complete: function(msg) {
                    console.log("首页电视网回调 " + msg);
                },
                count: 1000,
            })
            title = "电视";
        } else {
            // 请求综艺
            network.getArtList({
                success: function(movies) {
                    that.setData({
                        items: movies
                    })
                },
                fail: function(msg) {
                    console.log(msg);
                },
                complete: function(msg) {
                    console.log("首页综艺回调 " + msg);
                },
                count: 1000,
            })
            title = "综艺";
        }

        wx.setNavigationBarTitle({ title: title });

    }
})