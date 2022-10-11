const mongoose = require("mongoose");

const regSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add fullname"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Registration", regSchema);
