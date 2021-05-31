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
    throw Error(error);
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
