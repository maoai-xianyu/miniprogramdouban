//Page Object
Page({
    data: {

    },
    //options(Object)
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

    },

    // 返回上级页面
    onItemTapEvent: function(event) {
        wx.navigateBack({
            delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
        });
    }
});