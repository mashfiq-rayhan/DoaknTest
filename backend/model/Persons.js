const Person = require("./Person");

module.exports.addPerson = async function (
  firstName,
  lastName,
  dob,
  gender,
  contact,
  dokan,
  address,
  nidNumber
) {
  try {
    const person = await Person.create({
      firstName,
      lastName,
      dob,
      gender,
      contact,
      dokan,
      address,
      nidNumber,
    });
    if (person) return person;
    else throw Error("Custome error : Error at model/Person.create");
  } catch (error) {
    throw error;
  }
};

module.exports.getPerson = async function (id) {
  const key = id;
  if (key) {
    let person = await Person.findById(key);
    if (person) return person;
    else return null;
  }
  return null;
};

module.exports.deleteById = async function (id) {
  Person.deleteOne({ _id: id }, function (error) {
    if (error) {
      return {
        result: false,
        message: `something went wrong at model/persons/deleteById with the following error ${error}`,
      };
    } else {
      return { result: true, message: ` Successfully deleted ${id} ` };
    }
  });
};
