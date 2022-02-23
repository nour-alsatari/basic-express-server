"use strict";
const express = require("express");
const { logger } = require("./middleware/logger");
const { notFoundHandler } = require("./error-handlers/404");
const serverError = require("./error-handlers/500");
const app = express();
const validator = require("./middleware/validator");

app.use(logger); // application level

app.get("/", (req, res) => {
  console.log("logger should be above me");
res.send ('saying hi')

});

app.get("/person", validator, (req, res) => {
  res.json({
    name: req.query.name,
  });
});

app.use(serverError);
app.use("*", notFoundHandler);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

module.exports = { start, app };
