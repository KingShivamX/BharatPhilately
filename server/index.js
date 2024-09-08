// BharatPhilately backend entrypoint.
///////////////////////////////////////////////////////////////
// requirments
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const AuthRoutes = require('./routes/auth-routes');
const connectDB = require('./config/db')


const app = express();

connectDB();

app.use(express.json());
app.use('/api/auth', AuthRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Port is Listening at: ${process.env.PORT}`);
});

