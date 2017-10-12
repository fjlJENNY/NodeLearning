var url = require('url');
var url_string = url.format({
	protocol: 'http:',
	auth:"iqiyi",
	hostname: 'www.baidu.com',
	port: '80',
	pathname: '/news',
	query: {
		page: 1
	}
});

console.log(url_string);

//【url_resolve】
console.log(url.resolve("/one/two/three","/four")); // /four
console.log(url.resolve("/one/two/three","four"));  // /one/two/four
console.log(url.resolve("http://example.com/one","/two")); //
console.log(url.resolve("http://example.com/one","two"));