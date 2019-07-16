# miniprogramdouban

豆下程序练习

## 搜索栏实现

> 页面点击路由 navigator

### 自定义搜索栏
```
// components/searchbar/searchbar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

        isNavigator: {
            type: Boolean,
            vales: false
        }

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})

searchbar.json
{
  "component": true,
  "usingComponents": {}
}

<!-- components/searchbar/searchbar.wxml -->
<view class="searchbar">
    <navigator wx:if="{{isNavigator}}" url="/pages/search/search" class="search-navigator"></navigator>
    <view wx:else class="search-input-group">
        <input class='search-input' placeholder="搜索" placeholder-class="search-input-placeholder" />
    </view>
</view>

/* components/searchbar/searchbar.wxss */

.searchbar {
    background-color: #41be57;
    padding: 20rpx;
}

.searchbar .search-navigator {
    width: 100%;
    height: 60rpx;
    background-color: white;
    border-radius: 10rpx;
    /* base64 或者网络图片 */
    /* background-image: url("data:image/png;base64,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"); */
    background-image: url("https://wechat-1252364497.cos.ap-chengdu.myqcloud.com/images/search.png?q-sign-algorithm=sha1&q-ak=AKIDKbMC4oVyzuYbnoPJOZWFdnpd7NiRtDul&q-sign-time=1559722220;1559723120&q-key-time=1559722220;1559723120&q-header-list=&q-url-param-list=&q-signature=558bd58591867dc9427262e4bd1180e85b50ef60");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 6%;
}

.searchbar .search-input-group {
    width: 100%;
    height: 60rpx;
    background-color: white;
    border-radius: 10rpx;
    padding: 10rpx 20rpx;
    box-sizing: border-box;
}

.search-input-group .search-input {
    height: 40rpx;
    /* 需要设置   min-height  不然height 没有效果 */
    min-height: 40rpx;
    line-height: 40rpx;
    font-size: 24rpx;
    color: black;
}

.search-input-group .search-input-placeholder {
    height: 40rpx;
    line-height: 40rpx;
    font-size: 24rpx;
    text-align: center;
    color: gray;
}
```

### 调用

```
<!--index.wxml-->
<searchbar isNavigator="{{true}}"></searchbar>
<view>首页页面</view>

index.json
{
    "usingComponents": {
        "searchbar": "/components/searchbar/searchbar"
    }
}

<!--pages/search/search.wxml-->
<searchbar></searchbar>
<view>搜索页面</view>

search.json
{
    "usingComponents": {
        "searchbar": "/components/searchbar/searchbar"
    }
}
```

## 电影模块布局,最后要转成模板

> 注意scroll-view 横向滑动的时候，设置属性 wxss

```
.module-scroll-view {
    margin-top: 40rpx;
    width: 100%;
    height: 400rpx;
    /* scroll-view 横向滚动    white-space: nowrap; 子盒子  display: inline-block; */
    white-space: nowrap;
}

.module-scroll-view .item-navigator {
    margin-right: 20rpx;
    width: 200rpx;
    display: inline-block;
}
```
### 布局
```

<!-- index.wxml -->
<searchbar isNavigator="{{true}}"></searchbar>
<view class="module-group">
  <view class="module-top-group">
    <view class="module-title">电影</view>
    <navigator class="module-more">更多</navigator>
  </view>
  <scroll-view scroll-x="{{true}}" class="module-scroll-view">
    <navigator class="item-navigator">
      <view class="item-group">
        <view class="thumbnail-group">
          <image class="thumbnail" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554370800.webp" />
        </view>
        <view class="item-title">哥斯拉2：怪兽之王</view>
      </view>
    </navigator>

    <navigator class="item-navigator">
      <view class="item-group">
        <view class="thumbnail-group">
          <image class="thumbnail" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554370800.webp" />
        </view>
        <view class="item-title">哥斯拉2：怪兽之王</view>
      </view>
    </navigator>

    <navigator class="item-navigator">
      <view class="item-group">
        <view class="thumbnail-group">
          <image class="thumbnail" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554370800.webp" />
        </view>
        <view class="item-title">哥斯拉2：怪兽之王</view>
      </view>
    </navigator>
    <navigator class="item-navigator">
      <view class="item-group">
        <view class="thumbnail-group">
          <image class="thumbnail" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554370800.webp" />
        </view>
        <view class="item-title">哥斯拉2：怪兽之王</view>
      </view>
    </navigator>
  </scroll-view>
</view>


/**index.wxss**/

.module-group {
    padding: 40rpx;
    background: white;
}

.module-group .module-top-group {
    font-size: 36rpx;
    display: flex;
    justify-content: space-between;
}

.module-top-group .module-title {
    color: #494949;
}

.module-top-group .module-more {
    color: #41be57;
}

.module-scroll-view {
    margin-top: 40rpx;
    width: 100%;
    height: 400rpx;
    /* scroll-view 横向滚动    white-space: nowrap; 子盒子  display: inline-block; */
    white-space: nowrap;
}

.module-scroll-view .item-navigator {
    margin-right: 20rpx;
    width: 200rpx;
    display: inline-block;
}

.module-scroll-view .item-navigator:last-of-type {
    margin-right: 0;
}

.item-navigator .item-group {
    width: 100%;
}

.item-group .thumbnail-group {
    width: 100%;
    height: 280rpx;
}

.thumbnail-group .thumbnail {
    width: 100%;
    height: 100%;
}

.item-group .item-title {
    font-size: 28rpx;
    text-align: center;
    margin-top: 20rpx;
    text-overflow: ellipsis;
    overflow: hidden;
}
```

## 评分星星显示

```
index.wxml
<view class="rate-group">
    <image wx:for="{{[1,2,3]}}" src="../../images/rate_light.png" />
    <image src="../../images/rate_half.png" />
    <image src="../../images/rate_gray.png" />
    <text>7.5</text>
</view>

index.wxss
.rate-group {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20rpx;
    color: #ccc;
    margin-top: 20rpx;
}

.rate-group image {
    width: 20rpx;
    height: 20rpx;
}
```

## 自定义评分星星

```
index.wxml
<ratestars rate="7.5"></ratestars>

/* components/ratestars/ratestars.wxss */

.rate-group {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20rpx;
    color: #ccc;
    margin-top: 20rpx;
}

.rate-group image {
    width: 20rpx;
    height: 20rpx;
}

<!-- components/ratestars/ratestars.wxml -->
<view class="rate-group">
    <image style="width:{{starsize}}rpx;height:{{starsize}}rpx;" wx:for="{{lights}}" wx:key="*this" src="../../images/rate_light.png" />
    <image style="width:{{starsize}}rpx;height:{{starsize}}rpx;" wx:for="{{halfs}}" wx:key="*this" src="../../images/rate_half.png" />
    <image style="width:{{starsize}}rpx;height:{{starsize}}rpx;" wx:for="{{grays}}" wx:key="*this" src="../../images/rate_gray.png" />
    <text style="font-size:{{fontsize}}rpx;color:{{fontcolor}}">{{rateText}}</text>
</view>

// components/ratestars/ratestars.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        rate: {
            type: Number,
            value: 0
        },
        starsize: {
            type: Number,
            value: 20 //rpx
        },
        fontsize: {
            type: Number,
            value: 20
        },
        fontcolor: {
            type: String,
            value: "#ccc"
        }

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    },

    // 生命周期
    lifetimes: {
        attached: function() {
            var that = this;
            console.log('rating stars');
            var rate = that.properties.rate;
            console.log('rates ' + rate);
            var rateStars = parseInt(rate);
            console.log('rateStars ' + rateStars);
            var lights = parseInt(rateStars / 2);
            console.log('lights ' + lights);
            var halfs = rateStars % 2;
            console.log('halfs ' + halfs);
            var grays = 5 - lights - halfs;
            console.log('grays ' + grays);
            var rateText = rate && rate > 0 ? rate.toFixed(1) : '未评分';

            var lightsArr = [];
            var halfsArr = [];
            var graysArr = [];
            // 获取数组用于显示高亮的星星
            for (var index = 0; index < lights; index++) {
                lightsArr.push(index);
            }
            // 获取数组用于显示半高亮的星星
            for (var index = 0; index < halfs; index++) {
                halfsArr.push(index);
            }
            // 获取数组用于显示未高亮的星星
            for (var index = 0; index < grays; index++) {
                graysArr.push(index);
            }
            that.setData({
                lights: lightsArr,
                halfs: halfsArr,
                grays: graysArr,
                rateText: rateText
            });
        }
    }
})
```

## 首页接口用 easy mock 处理的数据

```
<!-- index.wxml -->
<searchbar isNavigator="{{true}}"></searchbar>
<!-- 电影 -->
<view class="module-group">
  <view class="module-top-group">
    <view class="module-title">电影</view>
    <navigator class="module-more">更多</navigator>
  </view>
  <scroll-view scroll-x="{{true}}" class="module-scroll-view">
    <navigator wx:for="{{movies}}" wx:key="{{item.title}}" class="item-navigator">
      <view class="item-group">
        <view class="thumbnail-group">
          <image class="thumbnail" src="{{item.cover}}" />
        </view>
        <view class="item-title">{{item.title}}</view>
        <ratestars rate="{{item.rate}}"></ratestars>
      </view>
    </navigator>
  </scroll-view>
</view>

<!-- 电视剧 -->
<view class="module-group">
  <view class="module-top-group">
    <view class="module-title">电视剧</view>
    <navigator class="module-more">更多</navigator>
  </view>
  <scroll-view scroll-x="{{true}}" class="module-scroll-view">
    <navigator wx:for="{{tvs}}" wx:key="{{item.title}}" class="item-navigator">
      <view class="item-group">
        <view class="thumbnail-group">
          <image class="thumbnail" src="{{item.cover}}" />
        </view>
        <view class="item-title">{{item.title}}</view>
        <ratestars rate="{{item.rate}}"></ratestars>
      </view>
    </navigator>
  </scroll-view>
</view>

<!-- 综艺 -->
<view class="module-group">
  <view class="module-top-group">
    <view class="module-title">综艺</view>
    <navigator class="module-more">更多</navigator>
  </view>
  <scroll-view scroll-x="{{true}}" class="module-scroll-view">
    <navigator wx:for="{{shows}}" wx:key="{{item.title}}" class="item-navigator">
      <view class="item-group">
        <view class="thumbnail-group">
          <image class="thumbnail" src="{{item.cover}}" />
        </view>
        <view class="item-title">{{item.title}}</view>
        <ratestars rate="{{item.rate}}"></ratestars>
      </view>
    </navigator>
  </scroll-view>
</view>


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
```


## 首页代码重构--定义组件

> 自定义组件中，还可也引用其他自定义组件

```
// components/indexmodule/indexmodule.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: ""
        },
        moreurl: {
            type: String,
            value: ""
        },
        items: {
            type: Array,
            value: []
        }

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})

indexmodule.json
{
    "component": true,
    "usingComponents": {
        "ratestars": "/components/ratestars/ratestars"
    }
}
// 组件中可以引用其他组件

<!--components/indexmodule/indexmodule.wxml-->
<view class="module-group">
  <view class="module-top-group">
    <view class="module-title">{{title}}</view>
    <navigator url="{{moreurl}}" class="module-more">更多</navigator>
  </view>
  <scroll-view scroll-x="{{true}}" class="module-scroll-view">
    <navigator wx:for="{{items}}" wx:key="{{item.title}}" class="item-navigator">
      <view class="item-group">
        <view class="thumbnail-group">
          <image class="thumbnail" src="{{item.cover}}" />
        </view>
        <view class="item-title">{{item.title}}</view>
        <ratestars rate="{{item.rate}}"></ratestars>
      </view>
    </navigator>
  </scroll-view>
</view>


/* components/indexmodule/indexmodule.wxss */

.module-group {
    padding: 40rpx;
    background: white;
}

.module-group .module-top-group {
    font-size: 36rpx;
    display: flex;
    justify-content: space-between;
}

.module-top-group .module-title {
    color: #494949;
}

.module-top-group .module-more {
    color: #41be57;
}

.module-scroll-view {
    margin-top: 40rpx;
    width: 100%;
    height: 400rpx;
    /* scroll-view 横向滚动    white-space: nowrap; 子盒子  display: inline-block; */
    white-space: nowrap;
}

.module-scroll-view .item-navigator {
    margin-right: 20rpx;
    width: 200rpx;
    display: inline-block;
}

.module-scroll-view .item-navigator:last-of-type {
    margin-right: 0;
}

.item-navigator .item-group {
    width: 100%;
}

.item-group .thumbnail-group {
    width: 100%;
    height: 280rpx;
}

.thumbnail-group .thumbnail {
    width: 100%;
    height: 100%;
}

.item-group .item-title {
    font-size: 28rpx;
    text-align: center;
    margin-top: 20rpx;
    text-overflow: ellipsis;
    overflow: hidden;
}


<!-- index.wxml -->
<searchbar isNavigator="{{true}}"></searchbar>
<!-- 电影 -->
<indexmodule title="电影" moreurl="" items="{{movies}}"></indexmodule>
<!-- 电视剧 -->
<indexmodule title="电视剧" moreurl="" items="{{tvs}}"></indexmodule>
<!-- 综艺 -->
<indexmodule title="综艺" moreurl="" items="{{shows}}"></indexmodule>

index.json
{
    "usingComponents": {
        "searchbar": "/components/searchbar/searchbar",
        "indexmodule": "/components/indexmodule/indexmodule"
    }
}

```


## MVC

1. model  ---> data
2. view   ---> wxml wxss
3. controller ---> 交互 js  index.js 用于控制器，需要将网络请求模块抽离

### 自定义网路模块

> 注意需要将网络模块导出 export { network }

```
urls.js 用于管理网络请求

// 用的自己的随便搞得数，可以不用这个定义，但是项目中可以这样抽离
const globalUrls = {
    moviesList: "https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_movies",
    tvsList: "https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_tvs",
    showsList: "https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_art"
}

export { globalUrls }


network.js

import { globalUrls } from "../../utils/urls.js" // 导入

const network = {
    getMoviesList: function(params) {
        // 电影 异步
        wx.request({
            url: globalUrls.moviesList, //开发者服务器接口地址",
            // data: '', //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var movies = res.data.subjects;
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
            url: globalUrls.tvsList, //开发者服务器接口地址",            // data: '', //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var tvs = res.data.subjects;
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
            url: globalUrls.showsList, //开发者服务器接口地址",
            // data: '', //请求的参数",
            method: 'GET',
            dataType: 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
            success: res => {
                console.log(res);
                var shows = res.data.subjects;
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
```

### 导入自定义网络模块
> 注意导入方式 import { network } from "network.js"

```
//index.js
import { network } from "network.js"
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
            }),

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
            }),

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
```

### 首页抽取单个电影封面模块

```
<!-- components/itemview/itemview.wxml -->
<navigator class="item-navigator">
    <view class="item-group">
        <view class="thumbnail-group">
            <image class="thumbnail" src="{{item.cover}}" />
        </view>
        <view class="item-title">{{item.title}}</view>
        <ratestars rate="{{item.rate}}"></ratestars>
    </view>
</navigator>

// components/itemview/itemview.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: {}
        }

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})

/* components/itemview/itemview.wxss */

.item-navigator {
    margin-right: 20rpx;
    width: 200rpx;
    display: inline-block;
}

/* 只有一个 */
/* .item-navigator:last-of-type {
    margin-right: 0;
} */

.item-navigator .item-group {
    width: 100%;
}

.item-group .thumbnail-group {
    width: 100%;
    height: 280rpx;
}

.thumbnail-group .thumbnail {
    width: 100%;
    height: 100%;
}

.item-group .item-title {
    font-size: 28rpx;
    text-align: center;
    margin-top: 20rpx;
    text-overflow: ellipsis;
    overflow: hidden;
}


{
    "component": true,
    "usingComponents": {
        "ratestars": "/components/ratestars/ratestars"
    }
}

```

### indexmodule调用

```
<!--components/indexmodule/indexmodule.wxml-->
<view class="module-group">
  <view class="module-top-group">
    <view class="module-title">{{title}}</view>
    <navigator url="{{moreurl}}" class="module-more">更多</navigator>
  </view>
  <scroll-view scroll-x="{{true}}" class="module-scroll-view">
    <itemview wx:for="{{items}}" wx:key="{{item.title}}" item="{{item}}"></itemview>
  </scroll-view>
</view>

indexmodule.json
{
    "component": true,
    "usingComponents": {
        "itemview": "/components/itemview/itemview"
    }
}

/* components/indexmodule/indexmodule.wxss */

.module-group {
    padding: 40rpx;
    background: white;
}

.module-group .module-top-group {
    font-size: 36rpx;
    display: flex;
    justify-content: space-between;
}

.module-top-group .module-title {
    color: #494949;
}

.module-top-group .module-more {
    color: #41be57;
}

.module-scroll-view {
    margin-top: 40rpx;
    width: 100%;
    height: 400rpx;
    /* scroll-view 横向滚动    white-space: nowrap; 子盒子  display: inline-block; */
    white-space: nowrap;
}

```

## 更多点击事件 和 页面展示

```
<!-- index.wxml -->
<searchbar isNavigator="{{true}}"></searchbar>
<!-- 电影 -->
<indexmodule title="电影" moreurl="/pages/list/list" items="{{movies}}"></indexmodule>
<!-- 电视剧 -->
<indexmodule title="电视剧" moreurl="/pages/list/list" items="{{tvs}}"></indexmodule>
<!-- 综艺 -->
<indexmodule title="综艺" moreurl="/pages/list/list" items="{{shows}}"></indexmodule>


<!-- pages/list/list.wxml -->
<searchbar isNavigator="{{true}}"></searchbar>
<view class="container_group">
    <itemview wx:for="{{movies}}" wx:key="{{item.key}}" item="{{item}}"></itemview>
</view>

list.json

{
    "usingComponents": {
        "searchbar": "/components/searchbar/searchbar",
        "itemview": "/components/itemview/itemview"
    }
}

/* pages/list/list.wxss */

.container_group {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30rpx;
}

// pages/list/list.js
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
        console.log("获取数据");
        var type = options.type;
        console.log("type----" + type);
        var that = this;
        var title = "";
        if (type === 'movie') {
            // 请求电影
            network.getMoviesList({
                success: function(movies) {
                    that.setData({
                        items: movies
                    })
                },
                fail: function(msg) {
                    console.log(msg);
                },
                complete: function(msg) {
                    console.log("首页电影回调 " + msg);
                },
                count: 1000,
            })
            title = "电影";
        } else if (type === 'tv') {
            // 请求电视
            network.getTvsList({
                success: function(tvs) {
                    that.setData({
                        items: tvs
                    })
                },
                fail: function(msg) {
                    console.log(msg);
                },
                complete: function(msg) {
                    console.log("首页电视网回调 " + msg);
                },
                count: 1000,
            })
            title = "电视";
        } else {
            // 请求综艺
            network.getArtList({
                success: function(movies) {
                    that.setData({
                        items: movies
                    })
                },
                fail: function(msg) {
                    console.log(msg);
                },
                complete: function(msg) {
                    console.log("首页综艺回调 " + msg);
                },
                count: 1000,
            })
            title = "综艺";
        }

        wx.setNavigationBarTitle({ title: title });

    }
})

```

## 列表页面和itemview显示处理

### 列表页面数据取余
```
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
```

### itemview组件处理null

```
<!-- components/itemview/itemview.wxml -->
<navigator wx:if="{{item}}" class="item-navigator">
    <view class="item-group">
        <view class="thumbnail-group">
            <image class="thumbnail" src="{{item.cover.url}}" />
        </view>
        <view class="item-title">{{item.title}}</view>
        <ratestars rate="{{item.rating.value}}"></ratestars>
    </view>
</navigator>
<view wx:else class="item-navigator"></view>

```

## 添加loading加载

```
js
// 显示loading
wx.showLoading({
    title: 'Loading...', //提示的内容,
    mask: true, //显示透明蒙层，防止触摸穿透,
    success: res => {
        console.log('loding--' + res);
        }
});

// 回调成功后，隐藏
wx.hideLoading();
```


## 接口修改，可以用微信小程序的豆瓣的接口，但是在网页中请求不到数据，应该是跨域的问题

## 接口api  [easy-mock](https://www.easy-mock.com/) 整合数据

> [easy-mock https://www.easy-mock.com/](https://www.easy-mock.com/)

* 电影

https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_movies


* 电视剧

https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_tvs

* 综艺

https://www.easy-mock.com/mock/5cf7cb2752e9085013407265/douban/search_subjects_art