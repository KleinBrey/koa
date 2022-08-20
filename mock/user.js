const userdata = require("../modules/login");
const operation = require("../dataBase/mongodb/operation");
const NodeRSA = require("node-rsa");
const svgCaptcha = require("svg-captcha");
const myuserInfo = require("../modules/userinfo");
const menu = require("../modules/menu");

operation.create(menu, {
  code: 200,
  data: [
    {
      path: "/firsthome",
      name: "firsthome",
      title: "首页",
    },
    {
      path: "/jsfundamental",
      name: "jsfundamental",
      title: "JS基础",
      children: [
        {
          path: "/home",
          name: "home",
          title: "测试一",
        },
        {
          path: "/promise",
          name: "promise",
          title: "测试二",
        },
        {
          path: "/prototype",
          name: "prototype",
          title: "原型",
        },
      ],
    },
    {
      path: "/vueFunction",
      name: "vueFunction",
      title: "Vue效果",
      children: [
        {
          path: "/vueFunction/buttoneffect",
          name: "buttoneffect",
          title: "动态按钮",
        },
      ],
    },
  ],
});

operation.create(myuserInfo, {
  name: "汪超",
  age: 82,
  address: "内蒙古自治区 鄂尔多斯市 准格尔旗",
});

module.exports;
