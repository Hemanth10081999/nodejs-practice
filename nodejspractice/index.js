var http = require('http');
var dt = require('./module')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!'+dt.myDateTime());
}).listen(8080);