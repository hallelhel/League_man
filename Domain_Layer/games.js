var express = require("express");
var router = express.Router();
const games_utils = require("./utils/games_utils");
// const DButils = require("../Data_Layer/DButils");
const team_utils = require("./utils/teams_utils");
const data_utils = require("../Data_Layer/sqlScripts");

async function gameReviewHundler(req, next) {
  try {
    const game_info = await games_utils.getGameDetaildByID(req.params.gameID);
    if (!game_info) {
      //game not exist in DB
      return {
        status: 400,
        message: `There is no game with ID ${req.params.gameID}`,
      };
      // res.send("There is no game with ID " + req.params.gameID);
    } else {
      return {
        status: 200,
        message: game_info,
      };
      // res.send(game_info);
    }
  } catch (error) {
    next(error);
  }
}

async function authnticateLeagueManager(req, next) {
  if (req.session && req.session.username === "admin") {
    //clieant verification
    data_utils
      .getFromTable("dbo.Users", ["username"])
      // DButils.execQuery("SELECT username FROM dbo.Users")
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
      message: "Only referee can modify games in league",
    };
    // res.status(401).send("Only referee can modify games in league");
  }
}

async function addGameHundler(req, next) {
  try {
    data = await req.body;
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
      // res.status(400).send("One or both team details are incorrect");
      return;
    }
    if (confirmDate) {
      let checkGame = await games_utils.checkGameDetails(data);
      if (checkGame !== "") {
        res.status(400).send(checkGame);
        return;
      }
      let status = await games_utils.AddGame(data);
      if (status) {
        return {
          status: 200,
          message: "Game added successfuly",
        };
        // res.status(200).send("Game added successfuly");
        return;
      } else {
        return {
          status: 400,
          message: "Game adding failed",
        };
        // res.status(400).send("Game adding failed");
      }
    } else {
      // issues with date
      return {
        status: 400,
        message: "The game date is invalid",
      };
      // res.status(400).send("The game date is invalid");
    }
  } catch (error) {
    next(error);
  }
}

exports.gameReviewHundler = gameReviewHundler;
exports.authnticateLeagueManager = authnticateLeagueManager;
exports.addGameHundler = addGameHundler;

//old project
// router.post("/LeagueManagment/addScore", async (req, res, next) => {
//   try {
//     const { game_id, home_team_goal, away_team_goal } = await req.body;
//     const checkIfGameOccur = await games_utils.checkIfGameOccur(game_id); //if game occur return true, otherwise false;
//     if (checkIfGameOccur) {
//       await games_utils.AddScoresToGame(
//         game_id,
//         home_team_goal,
//         away_team_goal
//       );
//       res.status(200).send("Score update to game with id " + game_id);
//     } else {
//       res.status(400).send(`Game with id ${game_id} has not occur yet.`);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/LeagueManagment/addEvent", async (req, res, next) => {
//   try {
//     const data = await req.body;
//     const game_id = data.game_id;
//     const player_id = data.player_id;
//     const availableToAddEvent = await games_utils.checkIfGameOccur(game_id);
//     const checkIfplayerInGames = await games_utils.checkIFPlayerInGame(
//       game_id,
//       player_id
//     );
//     if (availableToAddEvent && checkIfplayerInGames) {
//       await games_utils.AddEventToGame(data);
//       res
//         .status(200)
//         .send("The event has been added to game with id " + game_id);
//     } else {
//       res
//         .status(400)
//         .send("Can't add event to game. Please check the details.");
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
