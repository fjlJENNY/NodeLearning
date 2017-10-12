var fs = require("fs");
fs.rename("../text/test.txt","../text/test_1.txt",function(err){
	if(err){
		throw new Error(err);
	}
	console.log("文件名称修改成功");
});