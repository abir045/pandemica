const mongoose = require("mongoose");

const regSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "please add text "],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Registration", regSchema);
