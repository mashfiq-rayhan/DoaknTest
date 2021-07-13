const { Router } = require("express");
const { requireGuest } = require("../middleware/authMiddleware");
const authController = require("../controller/authController");

const router = Router();

router.get("/signup", requireGuest, authController.signupView);
router.get("/login", requireGuest, authController.loginView);
router.post("/signup", authController.userSignup);
router.post("/login", authController.userLogin);
module.exports = router;
