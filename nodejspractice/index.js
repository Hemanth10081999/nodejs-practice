var http = require('http');
var dt = require('./module')
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  var q= url.parse(req.url,true).query
  res.write(q.name+" "+q.age);
  res.end();
}).listen(8080);