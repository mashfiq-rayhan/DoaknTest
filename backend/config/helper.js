const cookieRule = (hours) => {
  return { httpOnly: true, maxAge: maxAge * hours };
};

module.exports = { cookieRule };
