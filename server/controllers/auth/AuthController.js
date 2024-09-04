require('dotenv').config();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../../models/UserSchema');
const { URLS } = require('../../constants');
const mailSender = require('../../services/notification-service')
const htmlTemplates = require('../../html')

// register 
const sendVerificationEmailForRegistration = async (req, res) => {
  try {
    const { email, fullName } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(401).json({
      success: false,
      message: "Email already exists",
    });


    const payLoad = { email, fullName };
    const verifyEmailToken = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: "5m" });

    if (!verifyEmailToken) return res.status(500).json({ success: false, message: "Error creating token" });

    const verificationLink = `${process.env.FRONTEND_URL}${URLS.createPasswordUrl}?token=${verifyEmailToken}`;

    const emailResponse = await mailSender(email, "BharatPhilately create new password and verify email", htmlTemplates.verifyEmail(fullName, verificationLink));

    console.log(emailResponse);

    return res.status(200).json({
      success: true,
      message: "Verification email sent successfully.",
      token: verifyEmailToken
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error sending verification",
    })
  }
}

const createPassword = async (req, res) => {
  const { password, confirmPassword, token } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: "Passwords do not match" });
  }

  const user = await jwt.verify(token, process.env.JWT_SECRET);
  if (!user || !user.email || !user.fullName)
    return res.status(400).json({ success: false, message: "Invalid token || token is Expired" });

  const isUserExist = await User.findOne({ email: user?.email });
  if (isUserExist) {
    return res.status(409).json({ success: false, message: "User already exists" });
  }

  const hashPassword = await bcryptjs.hash(password, 10);
  console.log("hashPassword: ", hashPassword);

  const updatedUser = await User.create({
    email: user.email,
    fullName: user.fullName,
    password: hashPassword,
  })
  console.log("updatedUser: ", updatedUser);

  const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  console.log("jwtToken: ", jwtToken);

  return res.status(200).json({
    success: true,
    message: "Password created successfully and logged in successfully",
    user: updatedUser,
    token: jwtToken,
  })
}

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

    const checkPassword = await bcryptjs.compare(password, User.password);
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


module.exports = { login, logout, sendVerificationEmailForRegistration, createPassword };