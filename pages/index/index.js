//index.js
import { network } from "../../utils/network.js"
Page({
    data: {},
    onLoad: function(options) {
        console.log('首页获取数据');
        var that = this;
        // 电视
        network.getMoviesList({
            success: function(movies) {
                that.setData({
                    movies: movies
                })
            },
            fail: function(msg) {
                console.log(msg);
            },
            complete: function(msg) {
                console.log("首页电影网路回调 " + msg);
            }
        })

        network.getTvsList({
            success: function(tvs) {
                that.setData({
                    tvs: tvs
                })
            },
            fail: function(msg) {
                console.log(msg);
            },
            complete: function(msg) {
                console.log("首页电视网路回调 " + msg);
            },
        })

        network.getArtList({
            success: function(shows) {
                that.setData({
                    shows: shows
                })
            },
            fail: function(msg) {
                console.log(msg);
            },
            complete: function(msg) {
                console.log("首页电视综艺回调 " + msg);
            },
        })
    }
})