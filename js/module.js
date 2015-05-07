/**
 * Auhor: shaoyuan.wangsy
 * Descript:模块模式实例
 * time：2015.05.07
 */

/**
 * javascript设计模式——基本实例
 * 从这个例子可以看出，这个对象类似一个类，私有变量方法，公有变量方法，清楚明了，外界只能通过加前缀实现
 * return里面的内容是公有变量，其余闭包内的var是私有变量
 * 这里看下模块模式如何实现一个购物车
 * *****/

var basketModule = (function(){

    //私有
    var basket = [];

    function doSomethingPrivate() {
        //..
    }
    function doSomethingPrivate() {
        //..
    }

    //返回一个暴露出的公共对象
    return {

        //添加item到购物车
        addItem: function(values){
            basket.push(values);
        },

        //获取购物车里的item数
        getItemCount: function(){
            return basket.length;
        },

        //私有函数的公有形式别名
        doSomething: doSomethingPrivate(),

        //获取购物车里所有item的价格总值
        getTotal: function(){
            var itemCount = this.getItemCount(),
                total = 0;

            while (itemCount--){
                total += basket[itemCount].price;
            }

            return total;
        }

    }

})();



/**
 * 项目中真正实例分析，多个dialog同时出现，多种情形
 *
 * *****/
(function(){
    function _dialog_f(options){
        // ..
        dialog.show();
    }

    var app = {};

    app.initOperation = function(){};
    app.agree_f = function(){};
    app.disagree_f = function(){};
    app.checkpass_f = function(){};
    app.refundpass_f = function(){};

    return app;
})();

