var connect = require("connect");
var logger_connect = require("./connect/logger.js");
var hello_connect = require("./connect/hello.js");
console.log(logger_connect);
var app = connect();
app.use(logger_connect.logger);
app.use(hello_connect.hello)
app.listen(3000);