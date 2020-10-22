var fs = require('fs');
function p1(filePath){
    var ps = new Promise(function(success,fa){
        fs.readFile(filePath,'utf8',function(err,data){
            if(!err){
                success(data);
            }else{
                fa(err);
            }
        })
    });
    return ps;
}

// var prom = p1('./a.txt')
p1('./a.txt')

// prom.then(function(val){
.then(function(val){
    console.log(val);
    return p1('./b.txt');
})
.then(function(val){
    console.log(val);
    return p1('./c.txt');
})
.then(function(val){
    console.log(val);
})
.catch(function(err){
    // 异步本身失败
    // 只打印异步失败的异常
    console.log(err)
})


