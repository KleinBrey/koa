const mongoose = require("mongoose");
mongoose.Promise = require('bluebird')
const MongoDBurl = "mongodb://localhost:27017/schema";
/**
 * mongoose连接数据库
 * @type {[type]}
 */
mongoose.connect(MongoDBurl, { useNewUrlParser: true });
const dbstatus = mongoose.connection;
dbstatus.on("error", console.error.bind(console, "连接数据库失败"));
dbstatus.once("open", () => {
  console.log("MongoDB连接成功");
});
module.exports = mongoose;
