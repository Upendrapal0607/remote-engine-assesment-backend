// import
const { Schema, model } = require("mongoose");

// register Schema
const Register_Schema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { versionKey: false }
);

// register mode
const Register_model = model("RegisterUser", Register_Schema);

// export

module.exports = {
  Register_model,
};
