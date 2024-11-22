const express = require("express");
const { register, login,logout, getProtectedData } = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authenticateToken, logout); // Add logout route
router.get("/protected", authenticateToken, getProtectedData);

module.exports = router;
