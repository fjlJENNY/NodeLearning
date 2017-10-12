var fs = require("fs");
fs.readFile("../text/test_1.txt","utf-8",function(err,data){
	if(err){
		throw new Error(err);
	}
	console.log(data);
});