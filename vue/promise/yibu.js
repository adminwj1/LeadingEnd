var fs = require('fs');
fs.readFile('./a.txt','utf8',function(err,fildata){
	console.log(fildata);
})

var fs = require('fs');
fs.readFile('./c.txt','utf8',function(err,fildata){
	console.log(fildata);
})

var fs = require('fs');
fs.readFile('./b.txt','utf8',function(err,fildata){
	console.log(fildata);
})

