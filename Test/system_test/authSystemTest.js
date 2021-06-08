const express = require("express"); // import express
const serverRoutes = require("../../Service_Layer/authService"); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const { send } = require("process");
const app = express(); //an instance of an express app, a 'fake' express app

app.use("/states", serverRoutes); //routes

describe("testing-server-routes", () => {
  it("register G /states - success", async () => {
    let stateObject = {
      username: "username1",
      firstname: "first1",
      lastname: "last1",
      country: "israel",
      password: "pass123",
      email: "kotlar@post.bgu.ac.il",
      picture: "image_url",
      role: "referee",
    };
    const { body } = await request(app).post("/states"); //uses the request function that calls on express app instance
    expect(body).toEqual([
      {
        state: "NJ",
        capital: "Trenton",
        governor: "Phil Murphy",
      },
      {
        state: "CT",
        capital: "Hartford",
        governor: "Ned Lamont",
      },
      {
        state: "NY",
        capital: "Albany",
        governor: "Andrew Cuomo",
      },
    ]);
  });
});
