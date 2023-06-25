# 最简单的 PM2 应用实践

1. 全局安装 PM2

```sh
npm install pm2 -g
```

2. 在集群模式下启动 Node.js 应用程序

```sh
# max 表示使用最大数量的实例
pm2 start index.js -i max
```
