const team_utils = require("./teams_utils");
const data_utils = require("../../Data_Layer/sqlScripts");

// add game to DB - get all details, checks the details 
async function AddGame(data) {
  try {
    const home_team_name = await team_utils.getTeamNameById(data.home_team_id);
    const away_team_name = await team_utils.getTeamNameById(data.away_team_id);
    let status = await data_utils.insertinto(
      "dbo.games",
      [
        "game_date","game_hour","home_team","away_team","home_team_id","away_team_id","field","referee_name",
      ],
      [data.date,data.hour,home_team_name,away_team_name,data.home_team_id,data.away_team_id,
        data.field,data.referee_username,
      ]
    );
    if (status) {
      return true;
    }
    return false;} catch (error) {
    return false;
  }
}
// date and time checks
function checkIfGameDetailsInFuture(date, hour) {
  let check;
  const currentDate = new Date().toLocaleString().split(",");
  const toDay = new Date();
  const gameDate = new Date(date);
  if (toDay > gameDate) {
    check = false;
  } else if (toDay < gameDate) {
    check = true;
  } else 
  {const nowHour = currentDate[1].split(":")[0];
    const gameHour = hour.split(":")[0];
    if (nowHour < gameHour) {check = true;} 
    else {check = false;}}
  return check;}
// check the details user insert depend on DB
async function checkGameDetails(data) {
  try {
    let message = "";
    let referee_username = data.referee_username;
    let refereeCheck = await data_utils.getFromTable(
      "dbo.role",
      ["username", "role"],
      [`username='${referee_username}'`, `role='referee'`]
    );
    if (!refereeCheck[0]) {
      return `referee user didn't found on DB`;
    }
    let gameAtSameTime = await data_utils.getFromTable(
      "dbo.games",
      ["home_team_id", "away_team_id", "field"],[`game_date ='${data.date}'`, `game_hour='${data.hour}'`]
    );

    if (
      gameAtSameTime.find(
        (x) =>
          x.home_team_id === data.home_team_id || x.away_team_id === data.away_team_id
      )
    ) {
      message += "One or Both teams already embedded  in this time.\n";
    }
    if (gameAtSameTime.find((x) => x.field === data.field)) {message += "The field already embedded in this time";
    }
    return message;} 
    catch {return "adding game faild";}
}
exports.AddGame = AddGame;
exports.checkIfGameDetailsInFuture = checkIfGameDetailsInFuture;
exports.checkGameDetails = checkGameDetails;