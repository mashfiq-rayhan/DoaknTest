const Person = require("./Person");
var mongoose = require("mongoose");
var Dokan = require("./Dokans");
var User = require("./Users");
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

module.exports.updatePerson = async function (id, value) {
  try {
    const person = await User.getUser(id);
    if (person) {
      try {
        const updPerson = await Person.findByIdAndUpdate(
          person.personid,
          value
        );
        if (!updPerson) {
          return {
            result: false,
            message: `something went wrong at model/persons/deleteById with the following error `,
          };
        } else {
          return {
            result: true,
            value: updPerson,
            message: ` Successfully updated ${updPerson.firstName} `,
          };
        }
      } catch (error) {
        throw error;
      }
    } else throw `something went wrong at model/user/getUser`;
  } catch (error) {
    return {
      result: false,
      message: `something went wrong at model/persons/deleteById with the following error : ${error}`,
    };
  }
};

module.exports.deleteById = async function (id) {
  try {
    let result = await Person.findByIdAndDelete(id);
    if (result) {
      return { result: true, massage: `Person Deleted ID: ${id}` };
    } else return { result: false, massage: `Person NOT Deleted ID: ${id}` };
  } catch (error) {
    return { result: false, massage: `Person NOT Deleted error: ${error}` };
  }
};
