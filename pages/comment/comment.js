//Page Object
import { network } from "../../utils/network.js"

Page({
    data: {
        commentsTotal: 0,
        start: 1,
        count: 20
    },
    onLoad: function(options) {
        console.log(options);
        var that = this;
        that.setData(options);
        that.getCommemts(1);
    },

    getCommemts: function(start) {
        var that = this;
        var oldStart = that.data.start;
        if (start > oldStart) {
            that.setData({
                nextLoading: true
            })
        } else {
            that.setData({
                preLoading: true
            })
        }
        // 获取comments
        network.getItemComments({
            id: that.data.id,
            type: that.data.type,
            start: start,
            count: 20,
            success: function(data) {
                console.log("------comments------begin");
                console.log(data);
                console.log("------comments------end");
                var commentsTotal = data.total;
                var comments = data.interests;
                that.setData({
                    comments: comments,
                    commentsTotal: commentsTotal,
                    start: start,
                    preLoading: false,
                    nextLoading: false,
                });
                wx.pageScrollTo({
                    scrollTop: 0, //滚动到页面的目标位置（单位px）,
                    duration: 300 //滚动动画的时长，默认300ms，单位 ms,
                });
            },
            fail: function(msg) {
                console.log(msg);
                that.setData({
                    preLoading: false,
                    nextLoading: false,
                });
            },
            complete: function(msg) {
                console.log(msg);
            },
        });
    },

    onPrePageTap: function(event) {
        var that = this;
        var oldStart = that.data.start;
        var count = that.data.count;
        if (oldStart - count > 0) {
            var start = oldStart - count;
            that.getCommemts(start);
        }
    },

    onNextPageTap: function(event) {
        var that = this;
        var oldStart = that.data.start;
        var start = oldStart + that.data.count;
        console.log("onNextPageTap start " + start);
        that.getCommemts(start);
    },

    // 返回上级页面
    onItemTapEvent: function(event) {
        wx.navigateBack({
            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
        });
    }
});