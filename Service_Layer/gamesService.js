var express = require("express");
var router = express.Router();
const games = require("../Domain_Layer/games");

router.get(`/GameDocumentation/:gameID`, async (req, res, next) => {
  const result = await games.gameReviewHundler(req, next);
  res.status(result.status).send(result.message);
});

router.use(async function (req, res, next) {
  const result = await games.authnticateLeagueManager(req, next);
  if (result) {
    res.status(result.status).send(result.message);
  }
});

router.post("/LeagueManagment/addGame", async (req, res, next) => {
  const result = await games.addGameHundler(req, next);
  res.status(result.status).send(result.message);
});

module.exports = router;
