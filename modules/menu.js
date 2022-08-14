const mongoose = require('../dataBase/mongodb/connect')
const schema = mongoose.Schema
const menuModel = new schema({
  code: { type: Number, required: true },
  data: { type: Array, required: true },
}, { collection: 'menulist' })

module.exports = mongoose.model('menulist', menuModel, 'menulist')