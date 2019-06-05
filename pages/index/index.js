//index.js
Page({
    data: {},
    onLoad: function(options) {
        console.log('首页获取数据');
        var that = this;
        wx.request({
            url: 'http://video.mtime.com/api/videoSearch/getFilterData?h=movie&y=全部年代&p=3&s=1&i=1&c=30', //开发者服务器接口地址",
            // data: {
            //     h: 'movie',
            //     y: '全部年代',
            //     p: 3,
            //     s: 20,
            //     i: 0,
            //     c: 30
            // }, //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
            },
            fail: () => {
                console.log('---->首页获取数据失败');
            },
            complete: () => {
                console.log('---->首页获取数据完成');
            }
        });
    }

})