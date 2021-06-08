var axios = require("axios");
const expect = require("chai").expect;
let chaiHttp = require("chai-http");
const chaiAsPromised = require("chai-as-promised");
let chai = require("chai");
const api_domain = "http://localhost:3001";
chai.use(chaiHttp);
chai.use(chaiAsPromised);
const path = require("path");
const games = require("../Domain_Layer/utils/games_utils");
const DButils = require("../Data_Layer/DButils");

// require(path.join(__dirname, '../','Domain_Layer','../Data_Layer/DButils'));
const bcrypt = require("bcryptjs");

//Testing the function checkIfGameDetailsInFuture(date, hour)
describe("check if game in future", function () {
  it("should return false if game date in the past", () => {
    let testInput = ["2020-5-12", "20:30:00"];
    const result = games.checkIfGameDetailsInFuture(...testInput);
    expect(result).to.be.false;
  });
});

describe("check if game in future", function () {
  it("should return true if game date in the future", () => {
    let testInput2 = ["2021-10-12", "21:30:00"];
    const result2 = games.checkIfGameDetailsInFuture(...testInput2);
    expect(result2).to.be.true;
  });
});

