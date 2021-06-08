var axios = require("axios");
const expect = require("chai").expect;
let chaiHttp = require("chai-http");
const chaiAsPromised = require("chai-as-promised");
let chai = require("chai");
const api_domain = "http://localhost:3001";
chai.use(chaiHttp);
chai.use(chaiAsPromised);
const path = require("path");
const games_utils = require("../Domain_Layer/utils/games_utils");
const DButils = require("../Data_Layer/DButils");
const data_utils = require("../Data_Layer/sqlScripts");
const games = require("../Domain_Layer/games");
// require(path.join(__dirname, '../','Domain_Layer','../Data_Layer/DButils'));
const bcrypt = require("bcryptjs");

//Testing the function checkIfGameDetailsInFuture(date, hour)
describe("check if game in future", function () {
  it("should return false if game date in the past", () => {
    let testInput = ["2020-5-12", "20:30:00"];
    const result = games_utils.checkIfGameDetailsInFuture(...testInput);
    expect(result).to.be.false;
  });
});

describe("check if game in future", function () {
  it("should return true if game date in the future", () => {
    let testInput2 = ["2021-10-12", "21:30:00"];
    const result2 = games_utils.checkIfGameDetailsInFuture(...testInput2);
    expect(result2).to.be.true;
  });
});

//Testing gameReview Hundler
describe("check the game review", () => {
  const testGameInfo = {
    date: "2021-7-31",
    hour: "22:30:00",
    home_team_name: "AaB",
    away_team_name: "Midtjylland",
    home_team_id: 1020,
    away_team_id: 939,
    home_team_goal: 2,
    away_team_goal: 1,
    eventSchedule: {},
  };
  context("activate-function", function () {
    it("should return 200 if the game exist in DB and the details", async function () {
      const result = await games.gameReviewHundler(1);
      expect(result.status).to.equal(200);
      expect(result.message.home_team).to.equal("AaB");
    });
  });
});
