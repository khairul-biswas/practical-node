const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", (req, res, next) => {
  console.log("Another middlewere");
  res.send("<h1>All Users</h1>");
});
app.use("/", (req, res, next) => {
  console.log("working middlewere");
  res.send("<h1>Hello from Express</h1>");
});
app.listen(8000);
