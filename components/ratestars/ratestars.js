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
            var rate = that.properties.rate;
            var rateStars = parseInt(rate);
            var lights = parseInt(rateStars / 2);
            var halfs = rateStars % 2;
            var grays = 5 - lights - halfs;
            var rateText = rate && rate > 0 ? rate.toFixed(1) : '未评分';
            console.log('rating stars' + 'rates ' + rate + 'rateStars ' + rateStars + 'lights ' + lights + 'halfs ' + halfs + 'grays ' + grays);
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