const Dokan = require("./Dokan");
const Person = require("./Persons");

module.exports.createDokan = async function (name) {
  try {
    const dokan = await Dokan.create({ name: name });
    if (dokan) return dokan;
    else throw Error("Custome error : Error at model/Dokan.create");
  } catch (error) {
    throw error;
  }
};

module.exports.addDokan = async function (id, name) {
  try {
    let newDokan = await this.createDokan(name);
    if (newDokan) {
      try {
        let updatedPerson = await Person.updatePerson(id, {
          dokan: newDokan._id,
        });
        if (updatedPerson) {
          console.log(updatedPerson);
          return {
            result: true,
            userId: id,
            dokan: newDokan.name,
            message: ` Successfully updated ${updatedPerson.value.firstName} `,
          };
        } else {
          throw {
            result: false,
            userId: id,
            message: `something went wrong at model/dokan.addDokan.updatePerson with the following error ${updatedPerson}`,
          };
        }
      } catch (error) {
        try {
          let garbage = await this.deleteDokan(newDokan._id);
          if (!garbage.value)
            throw {
              message: `something went wrong at model/dokan.addDokan.garbage`,
              addError: error,
              deleteError: garbage.message,
            };
        } catch (error) {
          throw error;
        }
        throw error;
      }
    }
  } catch (error) {
    console.log("model/dokans.addDokan :", error);
    return {
      result: false,
      userId: id,
      message: `something went wrong at model/dokans.addDokan with the following error : ${error}`,
    };
  }
};

module.exports.deleteDokan = async function (id) {
  try {
    let result = await Dokan.findByIdAndDelete(id);
    if (result) {
      return { value: true, message: `Dokan Deleted ID: ${id}` };
    } else return { value: false, message: `Dokan NOT Deleted ID: ${id}` };
  } catch (error) {
    return { value: false, message: `Dokan NOT Deleted error: ${error}` };
  }
};
