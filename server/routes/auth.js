const express = require("express");
const { signup, login } = require("../controllers/authController");
const { getAllBlogAdmin,getDashboard } = require("../controllers/blogController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/admin/all-blogs",getAllBlogAdmin)
router.get("/admin/dashboard",getDashboard)

module.exports = router;
