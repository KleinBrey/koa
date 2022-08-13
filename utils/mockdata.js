const menulist = {
  code: 200,
  data: [
    {
      path: "/firsthome",
      name: "firsthome",
      title: "首页"
    },
    {
      path: "/jsfundamental",
      name: "jsfundamental",
      title: "JS基础",
      children: [
        {
          path: "/home",
          name: "home",
          title: "测试一"
        },
        {
          path: "/promise",
          name: "promise",
          title: "测试二"
        },
        {
          path: "/prototype",
          name: "prototype",
          title: "原型"
        }
      ]
    },
    {
      path: "/vueFunction",
      name: "vueFunction",
      title: "Vue效果",
      children: [
        {
          path: "/vueFunction/buttoneffect",
          name: "buttoneffect",
          title: "动态按钮"
        }
      ]
    }
  ]
}


exports.menulist = menulist
