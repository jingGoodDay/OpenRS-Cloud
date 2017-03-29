$(document).ready(function(){
    $('#fullpage').fullpage({
        navigation:true,
        //navigationTooltips导航小圆点的提示，注意按顺序设置
        navigationTooltips:['page1','page2','page3','page4','page5','page6']
    });
    homePg.init();
});

var homePg={
    init: function () {
        //默认隐藏折叠菜单
        $(".nav-dataCenter-list").hide();
        //鼠标经过菜单时，显示折叠菜单
        $(".nav-dataCenter").hover(
            function(){
                $(".nav-dataCenter-list").show();
            },function(){
                $(".nav-dataCenter-list").hide();
        });
    }
};
