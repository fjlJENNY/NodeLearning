var fs = require("fs");
var os = require("os");
var constants = fs.constants; //常量
//console.log(constants);
//writeFile  写入数据，如果文件存在，则替代文件
fs.writeFile('../text/test.txt',"Hello Node",{flag:"a"},function(err){
	if(err){
		throw new Error(err);
	}
	fs.writeFile("../text/test.txt","gg smida",{flag:"a"},function(err){
		if(err){
			throw new Error(err);
		}
		fs.appendFile("../text/test.txt","+++=demo",function(err){
			if(err){
				throw new Error(err);
			}
			console.log("write File Success");
		});
		console.log("write File Success");
	});
	console.log("write File Success");
});


// fs.writeFile("../text/test.txt","gg smida",{flag:"a"},function(err){
// 	if(err){
// 		throw new Error(err);
// 	}
// 	console.log("write File Success");
// });

// fs.appendFile("../text/test.txt","+++=demo",function(err){
// 	if(err){
// 		throw new Error(err);
// 	}
// 	console.log("write File Success");
// });
