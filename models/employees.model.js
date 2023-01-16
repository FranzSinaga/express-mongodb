const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fullName: { required: true, type: String },
  position: { required: true, type: String },
  location: { required: true, type: String },
  salary: { required: true, type: Number },
});

module.exports = mongoose.model("Employee", schema);
