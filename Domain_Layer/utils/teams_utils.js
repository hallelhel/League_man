const e = require("express");
const data_utils = require("../../Data_Layer/sqlScripts");


// get id and check if exist in api
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

//get id and find team name in api
async function getTeamNameById(team_id) {
  const team = await data_utils.getFromSoccerAPI(`teams/${team_id}`);
  return team.data.data.name;
}

exports.checkIfTeamExist = checkIfTeamExist;
exports.getTeamNameById = getTeamNameById;
