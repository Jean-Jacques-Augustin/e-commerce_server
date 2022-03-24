const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
     },
     password: {
          type: String,
          required: true,
     },
     role: {
          type: String,
          required: true,
          default: "client",
     },
     createAt: {
          type: Date,
          required: true,
          default: Date.now,
     },
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;
