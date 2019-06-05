//index.js
Page({
    data: {},
    onLoad: function(options) {
        console.log('首页获取数据');
        var that = this;
        // 电影
        wx.request({
            url: 'https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_movies', //开发者服务器接口地址",
            // data: '', //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var movies = res.data.subjects;
                console.log(movies);
                that.setData({
                    movies: movies
                })
            },
            fail: () => {
                console.log('---->首页获取电影数据失败');
            },
            complete: () => {
                console.log('---->首页获取电影数据完成');
            }
        });

        // 电视
        wx.request({
            url: 'https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_tvs', //开发者服务器接口地址",
            // data: '', //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var tvs = res.data.subjects;
                console.log(tvs);
                that.setData({
                    tvs: tvs
                })
            },
            fail: () => {
                console.log('---->首页获取电视数据失败');
            },
            complete: () => {
                console.log('---->首页获取电视数据完成');
            }
        });

        // 综艺
        wx.request({
            url: 'https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_art', //开发者服务器接口地址",
            // data: '', //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var shows = res.data.subjects;
                console.log(shows);
                that.setData({
                    shows: shows
                })
            },
            fail: () => {
                console.log('---->首页获取综艺数据失败');
            },
            complete: () => {
                console.log('---->首页获取综艺数据完成');
            }
        });
    }

})