window.onload = function(){
    var index = 0;
    var oItem = document.getElementsByClassName("item");
    var oPrint = document.getElementsByClassName("print");
    var oNext = document.getElementById('next');
    var oPr = document.getElementById('prev');
    var goIndex =function(){
        for (var i = 0; i<oItem.length; i++){
            // oPrint[i].className = 'print';
            // oPrint[index].className = 'print active';
            oItem[i].className = 'item';
            oItem[index].className = 'item active';
        }
    }
    
    var goNext = function(){
        if (index < 3){
            index++;
            // console.log(index);
        }else{
            index = 0;
        }
        goIndex();
    }
    
    var goPr = function(){
        if (index == 0){
            index = 3;
        }else{
            index --;
        }
        goIndex();
    }
    
    
    oNext.addEventListener('click', function(){
        goNext();
    });
    
    oPr.addEventListener('click', function(){
        goPr();
    });

    setInterval(function(){
        goNext();
    }, 6000);
}

