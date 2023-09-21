const path = require("path");
const express = require("express");
const rootPath = require("./util/path");
const bodyParser = require("body-parser");
const app = express();

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootPath, "views", "404.html"));
});

app.listen(8000);
