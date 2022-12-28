const express = require("express");
const router = express.Router();
const {
  getApi,
  postApi,
  putApi,
  delApi,
} = require("../controller/apiController");


router.get("/", getApi);

router.post("/", postApi);

router.put("/:id", putApi);

router.delete("/:id", delApi);

module.exports = router;

