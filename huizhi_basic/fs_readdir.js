var fs  = require("fs");
fs.readdir("../text","buffer",function(err,files){
	if(err){
		throw new Error(err);
	}
	console.log(files);
});