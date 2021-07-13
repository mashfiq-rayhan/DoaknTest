const Dokan = require("../model/Dokans");
const Person = require("../model/Persons");

module.exports.dokanView = (req, res) =>
  res.status(200).json({ value: true, message: "Dokan View" });

module.exports.createDokan = async (req, res) => {
  const { userId, dokanName } = req.body;
  try {
    const newDokan = await Dokan.addDokan(userId, dokanName);
    if (newDokan.result) {
      res.status(200).json(newDokan);
    } else res.status(400).json(newDokan);
  } catch (error) {
    console.log("Error at DokanController.createDokan", error);
    res.status(400).json(newDokan);
  }
};
