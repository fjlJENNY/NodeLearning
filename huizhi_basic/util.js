var util = require("util");
var object = {"阿里云":"http://aliyun.com"}
var inspect = util.inspect(object); // inspect 进行检查
console.log(inspect,typeof inspect);
console.log(util.inspect(JSON.stringify,{colors:"yellow",depth:null}));
// console.log(util.inspect(util, {  depth: null }));

console.log("%s...","tomcat");
console.log(util.format('%s:%s:::', 'foo', 'bar', 'baz'));

// 如果第一个参数不是一个字符串，则 util.format() 返回一个所有参数用空格分隔并连在一起的字符串。 每个参数都使用 util.inspect() 转换为一个字符串。
console.log(util.format(1,3,4));