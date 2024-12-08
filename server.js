const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const User = require("./models/userModel");


mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("running successfully at",process.env.PORT);
    });
  })
  .catch((error) => console.log("Failed to connect", error));

app.use(userDataRoute);