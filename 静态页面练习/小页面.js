
$(function(){
    $(".tab-toggle .tab>a").mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        $('.tab-toggle .content>ul>li').hide();
        $('.tab-toggle .content>ul>li:eq('+index+')').show();
    })
});