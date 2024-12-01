const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  title: {
    require: true,
    type: String,
  },
  description: {
    require: true,
    type: String,
  },
});

const noteData = mongoose.model("notes", noteSchema);
module.exports = noteData;
