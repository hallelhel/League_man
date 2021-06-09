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
const auth = require("../Domain_Layer/auth");

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

// describe("check the game review {Failes}", () => {
//   context("gameReview with fake game id", function () {
//     it("should return 400 if the game exist in DB and the details", async function () {
//       const FakeGameId = 123;
//       const result = await games.gameReviewHundler(FakeGameId);
//       expect(result.status).to.equal(400);
//       expect(result.message).to.equal(`There is no game with ID ${FakeGameId}`);
//     });
//   });
// });

//Testing addGameHundler
describe("test addGameHundler#1 ", () => {
  context("send FakeReferee details- should return status 400", function () {
    it("Should return status 400 ", async function () {
      const FakeGame = {
        date: "2021-9-1",
        hour: "20:30:00",
        away_team_id: 939,
        home_team_id: 1020,
        field: "Tedi",
        referee_username: "FakeReferee",
      };
      const result = await games.addGameHundler(FakeGame);
      expect(result.status).to.equal(400);
      after(async function () {
        await DButils.execQuery(`Delete from dbo.games WHERE game_date='${FakeGame.date}' and game_hour='${FakeGame.hour}' and home_team_id='${FakeGame.home_team_id}' \
        and away_team_id='${FakeGame.away_team_id}'`);
      });
    });
  });
});

describe("test addGameHundler#2 ", () => {
  context("send correct details - should return status 200", function () {
    it("Should return status 200 ", async function () {
      const FakeGame = {
        date: "2021-8-1",
        hour: "20:30:00",
        away_team_id: 939,
        home_team_id: 1020,
        field: "Tedi",
        referee_username: "admin",
      };
      const result = await games.addGameHundler(FakeGame);
      expect(result.status).to.equal(200);
      after(async function () {
        await DButils.execQuery(`Delete from dbo.games WHERE game_date='${FakeGame.date}' and game_hour='${FakeGame.hour}' and home_team_id='${FakeGame.home_team_id}' \
        and away_team_id='${FakeGame.away_team_id}'`);
      });
    });
  });
});

describe("test addGameHundler#3 ", () => {
  context(
    "send incorrect date details. Should return status 400 and message- The game date is invalid",
    function () {
      it("Should return status 400 ", async function () {
        const FakeGame = {
          date: "2020-8-1",
          hour: "20:30:00",
          away_team_id: 939,
          home_team_id: 1020,
          field: "Tedi",
          referee_username: "noam",
        };
        const result = await games.addGameHundler(FakeGame);
        expect(result.status).to.equal(400);
        expect(result.message).to.equal("The game date is invalid");
        after(async function () {
          await DButils.execQuery(`Delete from dbo.games WHERE game_date='${FakeGame.date}' and game_hour='${FakeGame.hour}' and home_team_id='${FakeGame.home_team_id}' \
        and away_team_id='${FakeGame.away_team_id}'`);
        });
      });
    }
  );
});
