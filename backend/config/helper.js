const { maxAge, userStatus, secretJWTtoken } = require("./config");

module.exports.cookieRule = (hours) => {
  return { httpOnly: true, maxAge: maxAge * hours };
};

module.exports.userType = function (status) {
  let value;
  switch (status) {
    case "customer":
      value = userStatus.customer;
      break;
    case "seller":
      value = userStatus.seller;
      break;
    case "delivery":
      value = userStatus.delivery;
      break;
    case "admin":
      value = userStatus.admin;
      break;
    default:
      value = userStatus.customer;
  }
  return value;
};

module.exports.secretJWTtoken = secretJWTtoken;
