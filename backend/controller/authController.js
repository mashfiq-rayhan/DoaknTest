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
  } = req.body.authData;
  try {
    // Create Person
    var tempDokan = [];
    const newPerson = await Person.addPerson(
      firstName,
      lastName,
      birthday,
      gender,
      Number(phoneNumber),
      tempDokan,
      address,
      nid
    );
    if (newPerson) {
      try {
        const newDokan = await Dokan.createDokan(dokanName);
        if (newDokan) {
          newPerson.dokan.push(newDokan);
          await newPerson.save();
          try {
            const newUser = await User.addUser(
              email,
              password,
              Number(contact),
              status,
              newPerson._id
            );
            if (!newUser) res.status(400).send("User Not Found-400");
            const token = createJWT(newUser._id);
            //res.cookie("jwt", token, cookieRule(2));
            res.status(200).json({
              userId: newUser._id,
              userName: newPerson.firstName,
              tokenId: token,
            });
          } catch (error) {
            throw Error(error);
          }
        }
      } catch (error) {
        throw Error(error);
      }
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports.userLogin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.authData;
  console.log(email, password);
  res.json({ userId: "1234", tokedId: "qwer" });
  // try {
  //   const user = await User.login(email, password);
  //   if (user) {
  //     // Create JWT token
  //     const token = createJWT(user._id);

  //     // set cookie
  //     res.cookie("jwt", token, cookieRule(2));
  //     // send id , name
  //     res
  //       .status(200)
  //       .json({ message: "User Found and Logind in", user: user.personid });
  //   }
  // } catch (err) {
  //   console.log(err);
  //   const errors = errorHandler(err);
  //   console.log(errors);
  //   res.status(400).json({ errors });
  // }
};
