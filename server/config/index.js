const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI || "mongodb://localhost/drinks";

mongoose.connect(uri, { useNewUrlParser: true }).then(
    () => {
      console.log("Connected to Mongo");
    },
    err => {
      console.log("error connecting to Mongo: ");
      console.log(err);
    }
  );
  
  module.exports = mongoose.connection;