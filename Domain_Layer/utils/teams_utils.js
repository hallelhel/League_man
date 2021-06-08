const axios = require("axios");
const e = require("express");
const { trace } = require("../teams");
const api_domain = "https://soccer.sportmonks.com/api/v2.0";
const data_utils = require("../../Data_Layer/sqlScripts");


//in use
async function checkIfTeamExist(team_id) {
  try {
    const team = await data_utils.getFromSoccerAPI(
      `teams/${team_id}`,
      "league"
    );

    if (team.data.data.league.data.id == 271) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

//in use
async function getTeamNameById(team_id) {
  const team = await data_utils.getFromSoccerAPI(`teams/${team_id}`);
  return team.data.data.name;
}

exports.checkIfTeamExist = checkIfTeamExist;
exports.getTeamNameById = getTeamNameById;
