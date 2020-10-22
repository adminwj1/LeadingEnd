$(function(){
    $('.list li').mouseover(function(){
        $(this).find('ul').addClass('actv').siblings().removeClass('actv');
    });
    $('.list li').mouseout(function(){
        $(this).find('ul').removeClass('actv');
    });

    // 新闻项切换
    // $('.box003 li').mouseover(function(){
    //     $('.tab-content div').eq($(this).index()).addClass('actv').removeClass('mov');
    //     // $('.tab-content div').eq($(this).index());
    // });

    // $('.box003 li').mouseout(function(){
    //     $('.tab-content div').eq($(this).index()).addClass('mov').removeClass('actv');
    // });

    // $('.box003 ul').mouseout(function(){
    //     $('.tab-content div').eq($(this).index()).addClass('actv').removeClass('mov');
    // });
});