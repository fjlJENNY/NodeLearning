var os = require("os");
var platform = os.platform(); //查看操作系统平台 win32
var release = os.release(); //查看操作系统版本
var type = os.type(); //查看操作系统名称 Windows_NT
var arch = os.arch(); //操作系统CPU 架构
var constants = os.constants;
var cpus = os.cpus();
var tmpdir = os.tmpdir(); // 操作系统临时文件夹
var homedir = os.homedir(); //当前用户的home目录
var hostname = os.hostname();//操作系统的主机名
console.log(platform,release,type,arch);
//console.log(constants);
//console.log(cpus);
console.log(tmpdir);
console.log(homedir); 
console.log(hostname);