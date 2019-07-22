//Page Object
import { network } from "../../utils/network.js"

Page({
    data: {
        commentsTotal: 0
    },
    onLoad: function(options) {
        console.log(options);
        var that = this;
        var id = options.id;
        var type = options.type;
        var thumbnail = options.thumbnail;
        var title = options.title;
        var rate = options.rate;
        that.setData({
            thumbnail: thumbnail,
            title: title,
            rate: rate
        });

        // 获取comments
        network.getItemComments({
            type: type,
            id: id,
            start: 1,
            count: 20,
            success: function(data) {
                console.log("------comments------begin");
                console.log(data);
                console.log("------comments------end");
                var commentsTotal = data.total;
                var comments = data.interests;
                that.setData({
                    comments: comments,
                    commentsTotal: commentsTotal
                });
            },
            fail: function(msg) {
                console.log(msg);
            },
            complete: function(msg) {
                console.log(msg);
            },
        });

    },

    // 返回上级页面
    onItemTapEvent: function(event) {
        wx.navigateBack({
            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
        });
    }
});