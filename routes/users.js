const Router = require("koa-router");
const User = require("./controllers/user");

module.exports = function () {
  var router = new Router({
    // prefix: '/api'
  });

  // 功能页面
  router.get("/login", User.login);
  router.get("/menu", User.menulist);
  router.get("/code", User.registeCode);
  router.get("/registe", User.registe);
  router.post("/logout", User.logout);

  return router;
};
