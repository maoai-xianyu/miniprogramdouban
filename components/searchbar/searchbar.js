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
        onInputEvent: function(event) {
            var value = event.detail.value;
            var detail = {
                "value": value
            };
            var options = {};
            // 传递事件
            this.triggerEvent("searchinput", detail, options);
        }
    }
})