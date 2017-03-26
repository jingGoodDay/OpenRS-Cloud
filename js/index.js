$(document).ready(function(){
   homePg.init();
});

var homePg={
    init: function () {
        //默认隐藏折叠菜单
        $(".nav-dataCenter-list").hide();
        //默认每一页page的大小与窗口大小相同
        $(".page").height(window.innerHeight-90).css("background-size");

        //鼠标经过菜单时，显示折叠菜单
        $(".nav-dataCenter").hover(
            function(){
                $(".nav-dataCenter-list").show();
            },function(){
                $(".nav-dataCenter-list").hide();
        });
        //窗口大小改变时，改变page的尺寸
        $(window).resize(function () {
            $(".page").height(window.innerHeight-90);
        });
        //监听鼠标滚轮的滚动事件
        $(document).on("mousewheel DOMMouseScroll",function(e){
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
            console.log(document.body.scrollTop);
            if (delta > 0) {
                // 向上滚
                $("html,body").animate({scrollTop:'0px'},800);
            } else if (delta < 0) {
                // 向下滚
                //???如何获取当前页面所显示的div?
                $("html,body").animate({scrollTop:$(".content:eq(2)").offset().top},800);
                //$("content").scrollTop(window.innerHeight);
                //$("content").animate({scrollTop:$(".content:eq(1)").offset().top},800);
            }
        });
        //监听键盘up down键
        $(document).keydown(function (e) {
            var key_code=e.keyCode;
            if (key_code==38){
                //按下键盘up

            }else if (key_code==40){
                //按下键盘down

            }
        })
    }
};
