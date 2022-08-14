// 文件名为 pm2.config.js
module.exports = {
  apps: [{
      name: "koa", // 应用名称
      script: "./app.js" // 入口文件
  }]
}
