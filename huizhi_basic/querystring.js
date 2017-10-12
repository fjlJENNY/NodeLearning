var querystring = require("querystring");
//querystring  stringify("") parse("")  类似于 JSON的值
var obj = {"abc":"1","dd":"323","中文":"学习"};
var stringify = querystring.stringify(obj);
var escape = querystring.escape(stringify); // 字符串  URL编码
var stringifyMore = querystring.stringify(obj,"*","%");
var unescape1 = querystring.unescape(escape);
var unescape = querystring.unescape(unescape1);

console.log(stringify);
console.log(stringifyMore);

console.log(escape);
console.log(unescape1);
console.log(unescape);
