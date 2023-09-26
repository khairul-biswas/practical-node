const path = require("path");
const express = require("express");
const rootPath = require("./util/path");
const bodyParser = require("body-parser");
const app = express();

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");


app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);
app.use(shopRouter);

app.use((req, res, next) => {
  res.render("404",{pageTitle: 'Page not found'});
});

app.listen(8000);
