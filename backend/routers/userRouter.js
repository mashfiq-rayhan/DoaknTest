const { Router } = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const userController = require("../controller/userController");
const router = Router();

router.get("/", requireAuth, userController.personalInformation);

module.exports = router;
