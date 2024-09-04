const express = require('express');
const { login } = require('../controllers/auth/AuthController');


const AuthRoutes = express.Router();

AuthRoutes.post('/login',login)

module.exports = AuthRoutes