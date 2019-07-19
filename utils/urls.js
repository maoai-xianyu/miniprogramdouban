// 用的自己的随便搞得数，可以不用这个定义，但是项目中可以这样抽离
const globalUrls = {
    // 首页
    movieList: "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
    tvList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
    showList: "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
    // 详情
    movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
    tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
    showDetail: "https://m.douban.com/rexxar/api/v2/tv/",
}

export { globalUrls }