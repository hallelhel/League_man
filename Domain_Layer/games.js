var express = require("express");
var router = express.Router();
const games_utils = require("./utils/games_utils");
const team_utils = require("./utils/teams_utils");
const data_utils = require("../Data_Layer/sqlScripts");

// async function gameReviewHundler(gameId, next) {
//   try {
//     const game_info = await games_utils.getGameDetaildByID(gameId);
//     if (!game_info) {
//       //game not exist in DB
//       return {
//         status: 400,
//         message: `There is no game with ID ${req.params.gameID}`,
//       };
//     } else {
//       return {
//         status: 200,
//         message: game_info,
//       };
//     }
//   } catch (error) {
//     next(error);
//   }
// }

async function authnticateLeagueManager(req, next) {
  if (req.session && req.session.username === "admin") {
    //clieant verification
    data_utils
      .getFromTable("dbo.Users", ["username"])
      .then((users) => {
        if (users.find((x) => x.username === req.session.username)) {
          req.username = req.session.username;
          next();
        }
      })
      .catch((err) => next(err));
  } else {
    return {
      status: 401,
      message: "Only admin can modify games in league",
    };
  }
}

async function addGameHundler(reqBody, next) {
  try {
    const data = reqBody;
    const confirmDate = games_utils.checkIfGameDetailsInFuture(
      data.date,
      data.hour
    );
    let homeTeamCheck = await team_utils.checkIfTeamExist(data.home_team_id);
    let awayTeamCheck = await team_utils.checkIfTeamExist(data.away_team_id);
    if (!homeTeamCheck || !awayTeamCheck) {
      return {
        status: 400,
        message: "One or both team details are incorrect",
      };
    }
    if (confirmDate) {
      let checkGame = await games_utils.checkGameDetails(data);
      if (checkGame !== "") {
        return {
          status: 400,
          message: checkGame,
        };
      }
      let status = await games_utils.AddGame(data);
      if (status) {
        return {
          status: 200,
          message: "Game added successfuly",
        };
      } else {
        return {
          status: 400,
          message: "Game adding failed",
        };
      }
    } else {
      // issues with date
      return {
        status: 400,
        message: "The game date is invalid",
      };
    }
  } catch (error) {
    next(error);
  }
}

exports.authnticateLeagueManager = authnticateLeagueManager;
exports.addGameHundler = addGameHundler;
