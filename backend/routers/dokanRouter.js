const { Router } = require("express");
const dokanController = require("../controller/dokanController");
const { requireAuth } = require("../middleware/authMiddleware");
// Init Router

const router = Router();

router.get("/", dokanController.dokanView);

router.post("/create", requireAuth, dokanController.createDokan);
module.exports = router;
