const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const {errorHandeler} = require("./errorMiddleware/errorMiddleware");
dotenv.config({ path: "./config.env" });
require("./db");


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});
app.use("/api", require("./router/api"));
app.use("/user", require("./router/user"));
app.use(errorHandeler );

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
