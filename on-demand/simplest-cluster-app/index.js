const cluster = require('node:cluster');
const http = require('node:http');
const os = require('node:os');
const process = require('node:process');

// 主进程逻辑
if (cluster.isMaster) {
  console.log(`主进程已启动： ${process.pid}`);

  // CPU数量
  const numCPUs = os.cpus().length;
  // 创建工作进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  // 监听工作进程的退出事件
  cluster.on('exit', (worker) => {
    console.log(`工作进程已退出：${worker.process.pid}`);
    // 重新启动工作进程
    cluster.fork();
  });
}

// 工作进程逻辑
else {
  console.log(`工作进程已启动： ${process.pid}`);

  // 创建HTTP服务
  // 工作进程共享服务器端口
  http
    .createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`I'm ${process.pid}`);
    })
    .listen(3000);
}
