
// Data base connection with the help of mongoose 

const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.MONGO_URL);
module.exports = {
  connection,
};
