// pages/search/search.js
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
        var that = this;
        wx.getStorage({
            key: 'searched',
            success: (res) => {
                console.log(res.data);
                console.log("读取数据成功");
                var histories = res.data;
                that.setData({
                    histories: histories
                });
            },
            fail: () => {
                console.log("读取本地数据是失败");
            },
            complete: () => {}
        })

    },

    onSearchItem: function(event) {
        console.log("搜索页面");
        console.log(event);
        var that = this;
        var value = event.detail.value;
        if (!value || value === "") {
            that.setData({
                subjects: null
            });
            return;
        }
        network.getSearch({
            q: value,
            success: function(subjects) {
                that.setData({
                    subjects: subjects
                });
            },
            fail: function(msg) {
                console.log(msg);
            },
            completet: function(msg) {
                console.log(msg);
            }

        });
    },
    // js代码控制，没有用页面上navigater组件，因为navigater没有办法记住用户点击的是那个item,通过js可以处理不同的
    // 业务逻辑
    onItemTapEvent: function(event) {
        console.log(event);
        var that = this;
        var id = event.currentTarget.dataset.id;
        var title = event.currentTarget.dataset.title;
        console.log("id -- " + id + " title  " + title);
        var histories = that.data.histories;
        var isExisted = false;
        // histories 有值得话，进行循环操作
        if (histories) {
            for (var index = 0; index <= histories.length; index++) {
                var item = histories[index];
                if (item.id === id) {
                    isExisted = true;
                    break;
                }
            }
        }
        if (!isExisted) {
            // 赋值
            if (!histories) {
                histories = []
            }
            histories.push({
                id: id,
                title: title
            });
            wx.setStorage({
                key: 'searched',
                // 可以存放数据，此处存放集合
                data: histories,
                success: function() {
                    console.log("保存数据成功");
                },
                fail: () => {
                    console.log("保存数据失败");
                },
                complete: () => {
                    console.log("保存数据complete");
                },

            });
        }
        wx.navigateTo({ url: '/pages/detail/detail?type=movie&id=' + id });
    },

    onClearEvent: function(event) {
        wx.removeStorage({
            key: 'searched',
            success: res => {
                console.log("删除成功");
            }
        });
        this.setData({
            histories: null
        })
    }
})