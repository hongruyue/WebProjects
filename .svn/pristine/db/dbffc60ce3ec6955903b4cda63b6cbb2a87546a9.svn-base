var http = require('http');

var options = {
	host: 'localhost',
	port: '8081',
	path: '/index.html'
}

//处理响应的回调函数
var callback = function(response) {
	var body = ''
	response.on('data', function(data) {
		console.log(data)
		body += data;
	})
	response.on('end', function() {
		console.log(body)
	})

}
var req = http.request(options, callback);
req.end();