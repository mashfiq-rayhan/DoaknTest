const { Router } = require("express");
const homeController = require("../Controller/homeController");

const router = Router();

router.get("/", homeController.homeView);
router.get("/dokan", (req, res) => {
  res.redirect("/");
});
router.get("/home", (req, res) => {
  res.redirect("/");
});
router.get("/about", homeController.aboutView);
router.post("/about", (req, res) => {
  res.status(200).send("POSTED in ABOUT");
});

module.exports = router;
