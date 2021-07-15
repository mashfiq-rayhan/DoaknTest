const config = require("../config/helper");
const User = require("../model/Users");

async function varifY(id) {
  let user = await User.getUser(id);
  if (user) {
    if (user.status == 2 || user.status == 4) {
      return { varified: true };
    } else return { varified: false };
  } else return { varified: false };
}

const requireSeller = async (req, res, next) => {
  let { userId } = req.body;
  try {
    let seller = await varifY(userId);
    if (seller.varified) {
      next();
    } else res.status(400).json({ error: true, message: "Unauthorized User" });
  } catch (error) {
    console.log("dokanMiddleware Error : ", error);
    res
      .status(400)
      .json({ error: true, message: "something went wrong", paylode: error });
  }
};

module.exports = { requireSeller };
