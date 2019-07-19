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
        var type = options.type;
        var id = options.id;
        network.getItemDetail({
            type: type,
            id: id,
            success: function(item) {
                console.log(item);
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