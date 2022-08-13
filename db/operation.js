const operation = {
  /**
@params
model 模型对象
search 查询条件
update 更新数据
*/
  create: (model, data) => {
    model.create(data);
  },
  save: (model, data) => {
    const Newmodeldata = new model(data);
    Newmodeldata.save((err, res) => {
      if (err) {
        console.log("数据保存失败");
      } else {
        console.log("数据保存成功");
        return res;
      }
    });
  },
  find: (model, search) => {
    return new Promise((resolve, reject) => {
      model.find(search, (err, res) => {
        if (err) {
          console.log("数据查询失败");
          reject('');
        } else {
          console.log("数据查询成功");
          resolve(res);
        }
      });
    });
  },
  update: (model, search, update) => {
    model.update(search, update, function(err, res) {
      if (err) {
        console.log("数据更新失败");
      } else {
        console.log("数据更新成功");
        return res;
      }
    });
  },
  delete: (model, search) => {
    model.remove(search, function(err, res) {
      if (err) {
        console.log("数据删除失败");
      } else {
        console.log("数据删除成功");
        return res;
      }
    });
  },
  count: (model, search = {}) => {
    model.count(search, function(err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log(res); // 会输出数据库数据的数量
      }
    });
  }
};
module.exports = operation;
