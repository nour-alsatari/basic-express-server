const validator = (req, res, next) => {
  if (req.query.name) {
    console.log(req.query.name);

    next();
  } else {
    consol.log(req.query.name);
    // throw new Error("not valid");
    next("not valid"); // if i write string inside next it will throw an error
  }
};

module.exports = validator;
