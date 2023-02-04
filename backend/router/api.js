const express = require("express");
const router = express.Router();
const {
  getApi,
  postApi,
  putApi,
  delApi,
} = require("../controller/apiController");
const { protect} = require("../errorMiddleware/authMiddleware")

router.get("/",protect, getApi);

router.post("/", protect,postApi);

router.put("/:id", protect,putApi);

router.delete("/:id", protect,delApi);

module.exports = router;

