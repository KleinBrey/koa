const mongoose = require("../dataBase/mongodb/connect");
const schema = mongoose.Schema;
const loginModel = new schema(
  {
    userName: { type: String },
    passWord: { type: String }
  },
  { collection: "userdata" }
);
module.exports = mongoose.model("userdata", loginModel, "userdata");
