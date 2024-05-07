var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

// const cron = require('node-cron');
var app = express();
var cors = require("cors");
// view engine setup

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// assigning routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/auth", require("./auth/router"));
app.use("/franchise", require("./franchise/router"));


app.listen(process.env.PORT, () => {
  console.log(`Server started at http://localhost:${process.env.PORT}`);
});

module.exports = app;
