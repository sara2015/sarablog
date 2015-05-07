/**
 * Auhor: shaoyuan.wangsy
 * Descript:ģ��ģʽʵ��
 * time��2015.05.07
 */

/**
 * javascript���ģʽ��������ʵ��
 * ��������ӿ��Կ����������������һ���࣬˽�б������������б���������������ˣ����ֻ��ͨ����ǰ׺ʵ��
 * return����������ǹ��б���������հ��ڵ�var��˽�б���
 * ���￴��ģ��ģʽ���ʵ��һ�����ﳵ
 * *****/

var basketModule = (function(){

    //˽��
    var basket = [];

    function doSomethingPrivate() {
        //..
    }
    function doSomethingPrivate() {
        //..
    }

    //����һ����¶���Ĺ�������
    return {

        //���item�����ﳵ
        addItem: function(values){
            basket.push(values);
        },

        //��ȡ���ﳵ���item��
        getItemCount: function(){
            return basket.length;
        },

        //˽�к����Ĺ�����ʽ����
        doSomething: doSomethingPrivate(),

        //��ȡ���ﳵ������item�ļ۸���ֵ
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
 * ��Ŀ������ʵ�����������dialogͬʱ���֣���������
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

