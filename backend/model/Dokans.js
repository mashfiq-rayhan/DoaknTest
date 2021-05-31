const Dokan = require("./Dokan");

module.exports.createDokan = async function (name) {
  try {
    const dokan = Dokan.create({ name: name });
    if (dokan) return dokan;
    else throw Error("Custome error : Error at model/Dokan.create");
  } catch (error) {
    throw Error(error);
  }
};
