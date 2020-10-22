$(function(){
    // 二级菜单功能
    $(function(){
        $('.ss').mouseover(function(){
            // console.log($(this).index());
            $(this).next().addClass('actv').siblings().removeClass('actv');
        })

        $('.ss').mouseout(function(){
            $(this).siblings().removeClass('actv');
        })
    })
})