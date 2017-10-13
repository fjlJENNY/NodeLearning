var path = require("path");
var normalize = path.normalize("/path///normalize/hi/.."); //normalize(方法)
//【normalize】 解析 "." 和 ".." , 规范化给定的 path
var normalizePath = "/path///normalize//hi/..///../ref"
console.log(normalize); 
console.log(path.normalize(normalizePath)); // \path\ref

console.log(path.join("foo","bar\/d",".","asdf/baz","./","..")); // foo\bar\d\asdf  // 【join】


var pathLocation = "c:\\temp\\myfile.html";
var posixPath = "/tmp///.../myfile.html";
console.log(path.basename(posixPath,".html")); //  // 【basename】   + 【dirname】 == path

console.log(path.dirname("/foo///../bar/baz/asdf/quaz")); // /foo///../bar/baz/asdf (没有解析)   // 【dirname】

console.log("===="); 
// extname 和 basename 的相关 
console.log(path.extname("/foo///../bar/baz/asdf/quaz.index")); // 【extname】  //path 的最后一部分没有 . 或 path 的文件名（见 path.basename()）的第一个字符是 .，则返回一个空字符串。
console.log("=====");