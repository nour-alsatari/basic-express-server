"use strict";

const server = require("../src/server");

const supertest = require("supertest");
const { expect } = require("@jest/globals");

const request = supertest(server.app);

describe("*** API SERVER ***", () => {

  it("should respond with 500 if no name in the query", async () => {
    let response = await request.get("/person?name=");
    expect(response.status).toEqual(500);
  });

  it("200 if the name is in the query string", async () => {
    let response = await request.get("/person?name=anything");
    expect(response.status).toEqual(200);
  });

  it("200 if the name is in the query string", async () => {
    let response = await request.get("/person?name=anything");
    expect(typeof response.body).toEqual('object');
  });

});
