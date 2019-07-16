// 可以用了，直接使用utils/network.js   这个是对方法的抽离

import { globalUrls } from "../../utils/urls.js"

const network = {
    getMoviesList: function(params) {
        // 电影 异步
        wx.request({
            url: globalUrls.movieList, //开发者服务器接口地址",
            data: {
                count: 7
            }, //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var movies = res.data.subject_collection_items;
                if (params && params.success) {
                    params.success(movies)
                }
            },
            fail: () => {
                if (params && params.fail) {
                    params.fail('---->首页获取电影数据失败');
                }
            },
            complete: () => {
                if (params && params.complete) {
                    params.complete('---->首页获取电影数据完成');
                }
            }
        });
    },

    getTvsList: function(params) {
        // 电影 异步
        wx.request({
            url: globalUrls.tvList, //开发者服务器接口地址",            
            data: {
                count: 7
            }, //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var tvs = res.data.subject_collection_items;
                if (params && params.success) {
                    params.success(tvs)
                }
            },
            fail: () => {
                if (params && params.fail) {
                    params.fail('---->首页获取电视数据失败');
                }
            },
            complete: () => {
                if (params && params.complete) {
                    params.complete('---->首页获取电视数据完成');
                }
            }
        });
    },

    getArtList: function(params) {
        // 综艺
        wx.request({
            url: globalUrls.showList, //开发者服务器接口地址",
            // data: '', //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var shows = res.data.subject_collection_items;
                if (params && params.success) {
                    params.success(shows);
                }
            },
            fail: () => {
                if (params && params.fail) {
                    params.fail('---->首页获取综艺数据失败');
                }
            },
            complete: () => {
                if (params && params.complete) {
                    params.complete('---->首页获取综艺数据完成');
                }
            }
        });
    }


}

// 导出js 方便其他js调用
export { network }