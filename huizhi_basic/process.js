var cwd = process.cwd(); // 包含当前文件的目录
var argv = process.argv; //return 数组   array[0] 启动Nodejs进程时的命令行参数。array[1] 表示当前执行的javascript文件路径
var execpath = process.execPath;
var argv0 = process.argv0; 
var pid = process.pid;
var platform = process.platform;
var release = process.release; //node 发布版本 obj
try{
	process.chdir("../approachable");//修改当前工作目录
}catch(err){
	console.log(`改变目录失败: ${err}`);
}
console.log(process.cwd());
console.log(cwd);

process.stdout.write("hello world");

// process.stdin.on("readable",function(){
// 	var chunk = process.stdin.read();
// 	if(chunk!=null){
// 		process.stdout.write("data : " + chunk);
// 	}
// });

process.on("exit",function(code){
	console.log("I am tried...");
})
var tick = Date.now();
console.log(tick);
// console.log(argv);
// console.log(execpath);
// console.log(pid,platform,release);

//console.log(argv0);