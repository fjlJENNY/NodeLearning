var fs = require("fs");
fs.unlink("../text/test_1.txt",function(err){
	if(err){
		throw new Error(err);
	}
	console.log("文件删除成功");
});