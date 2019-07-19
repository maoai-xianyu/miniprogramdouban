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
        network.getItemDetail({
            type: type,
            id: id,
            success: function(item) {
                console.log(item);
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
    }
})