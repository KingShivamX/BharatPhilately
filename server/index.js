// BharatPhilately backend entrypoint.
///////////////////////////////////////////////////////////////
// requirments
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

///////////////////////////////////////////////////////////////
// express 
const app = express();
const port = 3000;

// express live listning setup
app.listen(port, () => {
    console.log(`Port is Listening at: ${port}`);
});

///////////////////////////////////////////////////////////////
// mondoDB
const dburl = process.env.ATLASDB;
const connectBD = async () => {
    await mongoose.connect(dburl);
}

connectBD()
.then(()=> (console.log("Connection Established")))
.catch((err)=> (console.log(err)));

///////////////////////////////////////////////////////////////
// middlewares








///////////////////////////////////////////////////////////////
// RESTful API's








