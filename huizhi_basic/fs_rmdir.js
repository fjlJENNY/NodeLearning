var fs = require("fs");
// rmdir 时， directory not empty
fs.rmdir("../mkdir_test",function(err){
	if(err){
		throw new Error(err);
	}
	console.log("删除目录成功");
});