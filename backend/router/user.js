const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controller/userController");
const {protect} = require("../errorMiddleware/authMiddleware")


router.post('/register',registerUser);
router.post("/login", loginUser);
router.get("/getUsers",protect, getUser);

module.exports = router;