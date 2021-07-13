const Dokan = require("../model/Dokans");
const Person = require("../model/Persons");

module.exports.dokanView = (req, res) =>
  res.status(200).json({ value: true, message: "Dokan View" });

module.exports.createDokan = async (req, res) => {
  const { userId, dokanName } = req.body;
  try {
    const newDokan = await Dokan.createDokan(dokanName);
    if (newDokan) {
      try {
        // console.log(newDokan._id);
        let update = await Person.updatePerson(userId, { dokan: newDokan._id });
        if (update.result) {
          res.status(200).json({ update });
        } else if (!update.result) {
          let result = await Dokan.deleteDokan(newDokan._id);
          if (result.value) res.status(400).json({ error: update });
          else throw result;
        }
      } catch (error) {
        throw error;
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
};
