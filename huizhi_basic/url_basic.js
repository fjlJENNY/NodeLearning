var url = require("url");

// 【url -- parse】
var basic_url = "http://baidu.com?page=1";
var next_url = "https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash";

console.log("protocol");
console.log(url.parse(next_url));

console.log(url.parse(basic_url));
console.log(url.parse(basic_url,true)); //parseQueryString 如果为 true, query 属性总会通过 querystring 模块的 parse() 方法生成一个对象


console.log(url.parse('http://www.baidu.com/news/tom?jenny=1',false,true));





//const myURL = new URL(next_url);
//console.log(myURL);