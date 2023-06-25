const http = require('node:http');
const process = require('node:process');

// 创建HTTP服务
http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`I'm ${process.pid}`);
  })
  .listen(3000);
