const Koa = require("koa");
const path = require("path");
const fs = require("fs");
require("./dataBase/mongodb/connect");
require("./dataBase/redis/connect");
// mock数据库数据
// require('./mock/user')

// 基本的插件
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");

// 日志有关的模块
const logger = require("koa-morgan");

const app = new Koa();
// post返回值
app.use(bodyParser());
// morgan 处理日志
const ENV = "prd"; //假设环境参数是prd
if (ENV === "dev") {
  app.use(logger("dev")); // 测试环境，打印在控制台
} else {
  // 线上环境，写入文件
  const logFileName = path.join(__dirname, "logs", "access.log");
  const logStream = fs.createWriteStream(logFileName, { flags: "a" });
  app.use(
    logger("combined", {
      stream: logStream,
    })
  );
}

// 使用session
app.keys = ["secret"];
const sessionConfig = {
  key: "koa:sess", // cookie key (默认koa：sess)
  maxAge: 86400000, // cookie的过期时间,毫秒，默认为1天
  overwrite: true, // 是否覆盖    (默认default true)
  httpOnly: false, // cookie是否只有服务器端可以访问,默认为true
  signed: true, // 签名默认true
  rolling: false, // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false, // (boolean) 会话即将到期时,续订会话
};
app.use(session(sessionConfig, app));

/**
 * 使用路由转发请求
 * @type {[type]}
 */
const router = require("./routes/users")();
// 默认页面
router.get("/", async (ctx) => {
  ctx.type = "html";
  ctx.body = fs.createReadStream("public/index.html");
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
