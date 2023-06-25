# 最简单的 PM2 应用实践<!-- omit in toc -->

## 1. 使用

1. 全局安装 PM2

```sh
npm install pm2 -g
```

2. 在集群模式下启动 Node.js 应用程序

```sh
# max 表示使用最大数量的实例
pm2 start index.js -i max
```

## 2. 理解

- PM2 的集群模式使用了 Node.js 的内置模块 cluster 来实现进程的负载均衡，在多个工作进程之间共享端口。
- 这种方式无需开发者手动编写复杂的负载均衡逻辑，PM2 会在后台自动处理这些事务，简化了管理和维护的任务。
