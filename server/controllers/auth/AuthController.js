const dotenv = require('dotenv');
dotenv.config();
const User = require("../models/UserSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register 
// remaining


// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "all files are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(409).json({
        success: false,
        message: "user is not exists, Please signUp first!",
      });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
      return res.status(409).json({
        success: false,
        message: "Password is incorrect",
      });
    }

    const payLoad = { id: user._id, email: user.email };
    const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      "User: ": user,
      message: "User logged in successfully",
      "jwtToken ": token,
    });
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
}


// logout 
const logout = async (req, res) => {
  res
    .clearCookie("token")
    .json({ success: true, message: "User logged out successfully" });
};


module.exports = { login, logout };