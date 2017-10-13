function hello(req,res){
	res.setHeader("Content-Type","text/plain");
	res.end("Hello world");
}

module.exports = {hello:hello};