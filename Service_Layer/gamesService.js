var express = require("express");
var router = express.Router();
const games = require("../Domain_Layer/games");
// get the game id from user to return the propriate details
router.get(`/GameDocumentation/:gameID`, async (req, res, next) => {
  const gameId = req.params.gameID;
  const result = await games.gameReviewHundler(gameId, next);
  res.status(result.status).send(result.message);
});
// catch the operation user do
router.use(async function (req, res, next) {
  const result = await games.authnticateLeagueManager(req, next);
  if (result) {
    res.status(result.status).send(result.message);
  }
});
// get the data from user about the new game and pass to domain layer
router.post("/LeagueManagment/addGame", async (req, res, next) => {
  const reqBody = await req.body;
  const result = await games.addGameHundler(reqBody, next);
  res.status(result.status).send(result.message);
});

module.exports = router;
