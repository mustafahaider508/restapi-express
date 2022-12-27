const express = require("express");
const router = express.Router();
const  {apiController} = require("../controller/apiController")


router.get("/", apiController);

router.post("/", (req, res) => {
  res.status(200).json({ message: "post api" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `put req on id ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `delete req on id ${req.params.id}` });
});

module.exports = router;

