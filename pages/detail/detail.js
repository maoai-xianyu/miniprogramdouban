// pages/detail/detail.js
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
        console.log(options);
        var that = this;
        var type = options.type;
        var id = options.id;
        that.setData({
            id: id,
            type: type
        });
        network.getItemDetail({
            type: type,
            id: id,
            success: function(item) {
                console.log("------header------begin");
                console.log(item);
                console.log("------header------end");
                var geners = item.genres;
                // ['1','2','3'].join = 1/2/3
                geners = geners.join('/');
                item.geners = geners;
                // 获取演员
                var actors = item.actors;
                var actorsNames = [];
                if (actors.length > 3) {
                    actors = actors.slice(0, 3);
                }
                actors.forEach(actor => {
                    actorsNames.push(actor.name)
                });
                actorsNames = actorsNames.join('/');

                //获取导演
                var director = item.directors[0].name;
                var authors = director + "(导演) /" + actorsNames;
                item.authors = authors;
                that.setData({
                    item: item
                })

            },
            fail: function(msg) {
                console.log(msg);
            },
            complete: function(msg) {
                console.log(msg);
            },
        });
        // 获取tags标签
        network.getItemTags({
            type: type,
            id: id,
            success: function(tags) {
                console.log("------tags------begin");
                console.log(tags);
                console.log("------tags------end");
                that.setData({
                    tags: tags
                });
            },
            fail: function(msg) {
                console.log(msg);
            },
            complete: function(msg) {
                console.log(msg);
            },
        });
        // 获取comments
        network.getItemComments({
            type: type,
            id: id,
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
    // 页面展示
    onShow: function() {
        wx.pageScrollTo({
            scrollTop: 0, //滚动到页面的目标位置（单位px）,
            duration: 300 //滚动动画的时长，默认300ms，单位 ms,
        });
    }
})