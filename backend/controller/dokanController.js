const Dokan = require("../model/Dokans");
const Person = require("../model/Persons");
const User = require("../model/Users");

async function getDokanId(id) {
  try {
    let user = await User.getUser(id);
    if (user) {
      let person = await Person.getPerson(user.personid);
      if (person) {
        return person.dokan;
      } else return false;
    } else return false;
  } catch (error) {
    console.log("Error at DokanCOntroller.dokanId :", error);
    return {
      error: true,
      message: `Something Went Wrong while Updating : ${error}`,
    };
  }
}

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

module.exports.updateDokan = async (req, res) => {
  const { userId, dokanName } = req.body;
  try {
    let dokanId = await getDokanId(userId);
    console.log(dokanId);
    if (dokanId) {
      let dokan = await Dokan.updateDokan(dokanId, { name: dokanName });
      if (dokan.updated) {
        res
          .status(200)
          .json({ result: true, error: false, message: dokan.value.name });
      } else if (dokanId.error) {
        res
          .status(400)
          .json({ result: false, error: true, message: dokanId.message });
      } else {
        res.status(400).json({
          result: false,
          error: true,
          message: `Something Went Wrong while Updating Error : ${dokan}`,
        });
      }
    }
  } catch (error) {
    console.log(" Error At dokanCOntroller.updateDokan :", error);
    res.status(400).json({
      result: false,
      error: true,
      message: `Something Went Wrong while Updating Error : ${error}`,
    });
  }
};
