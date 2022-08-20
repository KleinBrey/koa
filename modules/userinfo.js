const mongoose = require("../dataBase/mongodb/connect");
const schema = mongoose.Schema;
const userinfoModel = new schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
  },
  { collection: "userinfo" }
);

module.exports = mongoose.model("userinfo", userinfoModel, "userinfo");
