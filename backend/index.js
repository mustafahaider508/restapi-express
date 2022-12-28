const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const {errorHandeler} = require("./errorMiddleware/errorMiddleware");


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api", require("./router/api"));
app.use(errorHandeler);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
