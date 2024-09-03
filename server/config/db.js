const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const connect = () => {
  console.log("Connecting to ATLAS: ", process.env.ATLASDB)
  mongoose.connect(process.env.ATLASDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("DB Connection Successfully");
    })
    .catch((err) => {
      console.log("DB Connection ISSUES");
      console.error(err);
      process.exit(1);
    });
}

module.exports = connect;