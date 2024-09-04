const express = require('express');
const { login } = require('../controllers/auth/AuthController');
const { sendVerificationEmailForRegistration } = require('../controllers/auth/AuthController')
const { createPassword } = require('../controllers/auth/AuthController')


const AuthRoutes = express.Router();

AuthRoutes.post('/login', login)
AuthRoutes.post('/sendVerificationEmailForRegistration', sendVerificationEmailForRegistration);
AuthRoutes.post('/createPassword', createPassword)

module.exports = AuthRoutes