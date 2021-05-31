module.exports.homeView = (req, res) => {
  res.status(200).send("HOME VIEW");
};

module.exports.aboutView = (req, res) => {
  res.status(200).render("about", { title: "About" });
};
