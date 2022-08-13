const menu = require("../../modules/menu");
const userdata = require("../../modules/login");
const operation = require("../../db/operation");
const NodeRSA = require("node-rsa");
const svgCaptcha = require("svg-captcha");

// 生成验证码
exports.registeCode = async (ctx) => {
  const captcha = svgCaptcha.create({
    size: 4, //验证码长度
    fontSize: 45, //验证码字号
    noise: 1, //干扰线条数目
    width: 120, //宽度
    height: 40, //高度
    color: true, //验证码字符是否有颜色，默认是没有，但是如果设置了背景颜色，那么默认就是有字符颜色
    background: "#ccc", //beijing
  });
  
  ctx.session.captcha = captcha.text; // session 存储
  ctx.response.type = "image/svg+xml";
  ctx.body = captcha.data;
};
// 登录
exports.login = async (ctx, next) => {
  const key = new NodeRSA({ b: 512 });
  const request = ctx.request;
  const { userName, passWord } = request.query;
  const result = await operation.find(userdata, request.query);
  const ID = result[0]._id.toString();
  const encrypted = key.encrypt(ID, "base64"); // 加密后数据
  if (result.length === 0) {
    ctx.body = {
      code: 500,
      message: "还没注册！",
    };
  } else {
    ctx.body = {
      code: 0,
      data: {
        token: encrypted,
      },
    };
  }
};
// 注册
exports.registe = async (ctx) => {
  const request = ctx.request;
  console.log(request.query, ctx.session.captcha);
  const { userName, passWord, verify } = request.query;
  const result = await operation.find(userdata, request.query);
  if (result.length === 0) {
    if (verify === ctx.session.captcha) {
      operation.create(userdata, { userName, passWord });

      ctx.body = {
        code: 200,
        message: "注册成功！",
      };
    } else {
      ctx.body = {
        message: "验证码错误！",
      };
    }
  } else {
    ctx.body = {
      message: "已经注册！",
    };
  }
};

// 目录
exports.menulist = async (ctx, next) => {
  let menulist = await operation.find(menu, { code: 200 });
  ctx.body = menulist[0];
};

// 退出
exports.logout = async (ctx, next) => {
  ctx.body = { code: 200 };
};
