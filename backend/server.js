const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


app.use("/api", require("./router/api"))


app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
