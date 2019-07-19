import { globalUrls } from "urls.js"

const network = {
    getMoviesList: function(params) {
        console.log('---->首页获取电影数据');
        params.type = 'movie'
        this.getItemList(params);
    },

    getTvsList: function(params) {
        params.type = 'tv'
        this.getItemList(params);
    },

    getArtList: function(params) {
        params.type = 'shows'
        this.getItemList(params);
    },

    getItemList: function(params) {
        var url = "";
        var type = params.type;
        if (type === 'movie') {
            // 请求电影
            url = globalUrls.movieList;
        } else if (type === 'tv') {
            // 请求电视
            url = globalUrls.tvList;
        } else {
            // 请求综艺
            url = globalUrls.showList;
        }
        var count = params.count ? params.count : 7;

        console.log("getItemList url " + url + "--count  " + count);

        wx.request({
            url: url, //开发者服务器接口地址",
            data: {
                count: count
            }, //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var items = res.data.subject_collection_items;
                // 处理裂表页面显示2个的情况
                var itemsLength = items.length;
                if (itemsLength % 3 === 2) {
                    items.push(null);
                }
                if (params && params.success) {
                    params.success(items)
                }
            },
            fail: () => {
                if (params && params.fail) {
                    params.fail('---->首页获取数据失败');
                }
            },
            complete: () => {
                if (params && params.complete) {
                    params.complete('---->首页获取数据完成');
                }
            }
        });
    },

    //获取详细数据
    getItemDetail: function(params) {
        var type = params.type;
        var id = params.id;
        var url = "";
        if (type === "movie") {
            url = globalUrls.movieDetail + id;
        } else if (type === "tv") {
            url = globalUrls.tvDetail + id;
        } else {
            url = globalUrls.showDetail + id;
        }
        console.log("getItemDetail url " + url);
        wx.request({
            url: url,
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                if (params && params.success) {
                    var item = res.data;
                    params.success(item);
                }
            },
            fail: () => {
                if (params && params.fail) {
                    params.fail('---->获取详细页数据失败');
                }
            },
            complete: () => {
                if (params && params.complete) {
                    params.complete('---->获取详细页数据完成');
                }
            }
        });
    },

    // 获取详情tags
    getItemTags: function(params) {
        var type = params.type;
        var id = params.id;
        var url = "";
        if (type === "movie") {
            url = globalUrls.movieTags(id);
        } else if (type === "tv") {
            url = globalUrls.tvTags(id);
        } else {
            url = globalUrls.showTags(id);
        }
        console.log("tags url " + url)
        wx.request({
            url: url,
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                if (params && params.success) {
                    console.log(res);
                    var tags = res.data.tags;
                    params.success(tags);
                }
            },
            fail: () => {
                if (params && params.fail) {
                    params.fail('---->获取详细页tags失败');
                }
            },
            complete: () => {
                if (params && params.fail) {
                    params.complete('---->获取详细页tags完成');
                }
            }
        });
    }

}

// 导出js 方便其他js调用
export { network }