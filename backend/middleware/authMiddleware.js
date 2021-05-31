const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../model/Users");
// get user from Model

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, config.secretJWTtoken, (err, decodedToken) => {
      if (err) {
        res.redirect("/login");
        next();
      } else {
        console.log(decodedToken);
        next();
      }
    });
  }
  res.redirect("/login");
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, config.secretJWTtoken, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.getUser(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const requireGuest = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    res.redirect("/user");
    next();
  } else next();
};
module.exports = { requireAuth, checkUser, requireGuest };
