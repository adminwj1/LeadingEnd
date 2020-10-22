window.onload = function(){

    // alert('hello');
    var index = 0;
    var oItem = document.getElementsByClassName("item");
    var oPrint = document.getElementsByClassName("print");
    var oNext = document.getElementById('btn_next');
    var oPr = document.getElementById('btn_pr');

    // 新闻事件
    var  goIndex = function(){
        for (var i=0; i<oItem.length; i++){
            // console.log(i);
            oItem[i].className = 'item';
            oPrint[i].className = 'print';
            oPrint[index].className = 'print active';
            oItem[index].className = 'item lunbotu_actv';

        }
    }
    var goNext = function(){
        if (index < 4 ){
            index ++;
        }else{
            index = 0;
        }
        goIndex();
    }

    var goPr = function(){
        if (index == 0){
            index = 4;
        }else{
            index --;
        }
        goIndex();
    }

    // 定时器播放轮播图，每隔6秒动一次
    setInterval(function(){
        goNext();
    }, 6000);

    oNext.addEventListener('click', function(){
        goNext();
    });

    oPr.addEventListener('click', function(){
        goPr();
    });
    for (var i=0; i < oPrint.length; i++){
        oPrint[i].addEventListener('click', function(){
            var printIndex = this.getAttribute('data-index');
            index = printIndex;
            goIndex();
        });
    }



}