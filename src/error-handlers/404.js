"use strict";

function notFoundHandler( req, res, next) {
  res.status(404).json({
    code: 404,
    messgae: `ops page not found`
  });
}

module.exports = {notFoundHandler};



