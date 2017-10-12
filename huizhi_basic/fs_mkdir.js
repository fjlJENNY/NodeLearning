var fs = require("fs");
fs.mkdir("../mkdir_test",function(err){
	if(err){
		throw new Error(err);
	}
	console.log("directory 创建成功");
});