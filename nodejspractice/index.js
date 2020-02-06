const http = require('http')

const server = http.createServer((req, res) => {
  console.log('url ' + req.url);
  if (req.url == '/health') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('response from health api');
    res.end();
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('page not found');
    res.end();
  }
})
server.listen(8080);