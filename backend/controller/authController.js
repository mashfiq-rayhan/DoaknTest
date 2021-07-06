const User = require("../model/Users");
const jwt = require("jsonwebtoken");
const { cookieRule, secretJWTtoken } = require("../config/config");
const Dokan = require("../model/Dokans");
const Person = require("../model/Persons");

// Custom Functions
function createJWT(id) {
  return jwt.sign({ id }, secretJWTtoken, {
    expiresIn: 24 * 60 * 60 * 1000,
  });
}

function errorHandler(err) {
  let errors = { email: "", password: "" };

  //Incorrect Email
  if (err.message === "incorrect Email") {
    errors.email = "Email Address Dosen't Exists";
  }

  //Incorrect Password
  if (err.message === "incorrect Password") {
    errors.password = "Incorrect Password , Please try Again";
  }
  // Duplicate error

  if (err.code === 11000) {
    errors.email = "Email Already Exists , Please enter another Email";
    return errors;
  }
  // Validation error
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}

// Export Modules
module.exports.signupView = (req, res) => res.status(200).send("SignUp Page");

module.exports.loginView = (req, res) => res.status(200).send("Login Page");

module.exports.userSignup = async (req, res) => {
  let {
    firstName,
    lastName,
    email,
    password,
    status,
    phoneNumber,
    nid,
    gender,
    birthday,
    dokanName = "",
    address = "",
  } = req.body;
  var newPerson;
  try {
    // Create Person
    var tempDokan = [];
    try {
      newPerson = await Person.addPerson(
        firstName,
        lastName,
        birthday,
        gender,
        Number(phoneNumber),
        tempDokan,
        (address = "address"),
        nid
      );
    } catch (error) {
      throw Error(error);
    }
    try {
      const newUser = await User.addUser(
        email,
        password,
        Number(phoneNumber),
        status,
        newPerson._id
      );
      if (newUser) {
        const token = createJWT(newPerson._id);
        res.status(200).json({
          userId: newUser._id,
          email: newUser.email,
          userName: newPerson.firstName,
          tokenId: token,
        });
      }
    } catch (error) {
      throw Error(error);
    }
  } catch (error) {
    console.log(error);
    const errors = errorHandler(error);
    res.status(400).json({ error });
  }
};

module.exports.userLogin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.login(email, password);
    if (user) {
      // Create JWT token
      const token = createJWT(user._id);

      // set cookie
      res.cookie("jwt", token, cookieRule(2));
      // send id , name
      res
        .status(200)
        .json({ message: "User Found and Logind in", user: user.id });
    }
  } catch (err) {
    console.log(err);
    const errors = errorHandler(err);
    console.log(errors);
    res.status(400).json({ errors });
  }
};
