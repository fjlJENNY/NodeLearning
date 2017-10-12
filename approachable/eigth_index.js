var http = require("http");
var sessions = {};
var key = "session_id";
var EXPIRES = 20*60*1000;
var generate = function(){
	var session = {};
	session.id = (new Date()).getTime() + Math.random();
	session.cookie = {
		expires:(new Date()).getTime() + EXPIRES
	}
	sessions[session.id] = session;
	return session;
}


http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("Hello World!");
}).listen(3000);
console.log("server running at http://127.0.0.1:3000");