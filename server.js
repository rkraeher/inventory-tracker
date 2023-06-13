const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

const url = process.env.DB_CONNECTION_URI;

mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

