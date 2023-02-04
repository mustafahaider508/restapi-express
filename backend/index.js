const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const {errorHandeler} = require("./errorMiddleware/errorMiddleware");
dotenv.config({ path: "./config.env" });
require("./db");

app.use(express.json());
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
app.use(errorHandeler );

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
