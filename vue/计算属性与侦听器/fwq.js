var http = require('http');

var server = http.createServer();
server.listen(8000);
server.on('request',function(req,res){
    var urls = require('url').parse(req.url,true);
    if(urls.pathname == '/'){
        if(urls.query.name == 'admin'){
            res.end('0')
        }else{
            res.end('1');
        }
    }else{
        require('fs').readFile('.'+urls.pathname, function(err,data){
            res.end(data);
        })
    }
    
})