$(document).scroll(function(){
    var nowTop = $(document).scrollTop();
    if(nowTop > 200){
        $('.menu').addClass("fixed");
    }else{
        $('.menu').removeClass("fixed");
    }
})