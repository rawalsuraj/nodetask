require('dotenv').config()

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_URL || "mongodb://localhost:27017/demotask";
db.Employee = require("./employee.model")(mongoose);

module.exports = db;
