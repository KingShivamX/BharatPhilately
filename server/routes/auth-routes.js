const express = require('express');
const { login, forgotPassword, createPassword, sendVerificationEmailForRegistration, resetPassword } = require('../controllers/auth/AuthController');


const AuthRoutes = express.Router();

AuthRoutes.post('/login', login)
AuthRoutes.post('/sendVerificationEmailForRegistration', sendVerificationEmailForRegistration);
AuthRoutes.post('/createPassword', createPassword)
AuthRoutes.post('/forgot-password', forgotPassword)
AuthRoutes.post('/resetPassword', resetPassword)

module.exports = AuthRoutes