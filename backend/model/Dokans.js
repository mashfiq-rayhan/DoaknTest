const Dokan = require("./Dokan");

module.exports.createDokan = async function (name) {
  try {
    const dokan = await Dokan.create({ name: name });
    if (dokan) return dokan;
    else throw Error("Custome error : Error at model/Dokan.create");
  } catch (error) {
    throw error;
  }
};

module.exports.deleteDokan = async function (id) {
  try {
    let result = await Dokan.findByIdAndDelete(id);
    if (result) {
      return { value: true, massage: `Dokan Deleted ID: ${id}` };
    } else return { value: false, massage: `Dokan NOT Deleted ID: ${id}` };
  } catch (error) {
    return { value: false, massage: `Dokan NOT Deleted error: ${error}` };
  }
};
