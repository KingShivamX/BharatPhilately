const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  role: {
    type: String,
    enum: ["admin", "customer"],
    default: "customer",
  },

  password: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
  },
)

const User = new mongoose.model('User', UserSchema);
module.exports = User;