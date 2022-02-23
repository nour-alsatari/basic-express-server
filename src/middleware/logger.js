"use strict";

function logger(req, res, next) {
  console.log(
    `The request method is: ${req.method} and the path you are requesting is: ${req.path}`
  );
  next();
}

module.exports = { logger };
// const logger = require("./middleware/logger")
// app.use(logger.logger)
// or destructuring const {logger} = require('./middleware/logger')

//---------OR--------------
//module.exports =  logger; which is easier


