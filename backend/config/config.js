const maxAge = 1 * 60 * 60 * 1000;

const userStatus = {
  customer: 1,
  seller: 2,
  delivery: 3,
  admin: 4,
};

const secretJWTtoken = "8^%145su*^%d%$%&";

const cookieRule = (hours) => {
  return { httpOnly: true, maxAge: maxAge * hours };
};

module.exports = { cookieRule, secretJWTtoken };
