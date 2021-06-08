const team_utils = require("./teams_utils");
const data_utils = require("../../Data_Layer/sqlScripts");

//in use
async function AddGame(data) {
  try {
    const home_team_name = await team_utils.getTeamNameById(data.home_team_id);
    const away_team_name = await team_utils.getTeamNameById(data.away_team_id);
    let status = await data_utils.insertinto(
      "dbo.games",
      [
        "game_date",
        "game_hour",
        "home_team",
        "away_team",
        "home_team_id",
        "away_team_id",
        "field",
        "referee_name",
      ],
      [
        data.date,
        data.hour,
        home_team_name,
        away_team_name,
        data.home_team_id,
        data.away_team_id,
        data.field,
        data.referee_username,
      ]
    );
    if (status) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
//in use
async function AddScoresToGame(gameId, homeGoal, awayGoal) {
  try {
    data_utils.updateTable(
      "dbo.games",
      [`home_team_goal = ${homeGoal}`, `away_team_goal =${awayGoal}`],
      [`game_id = ${gameId}`]
    );
  } catch (error) {
    error;
  }
}
//in use
function convertDateAndHour(date, hour) {
  let game_hour = String(hour).slice(16, 25);
  let game_date = String(date).slice(0, 15);
  return {
    date: game_date,
    hour: game_hour,
  };
}
//in use
async function checkIfGameOccur(game_id) {
  game_id_num = Number(game_id);
  const gameDetails = await data_utils.getFromTable(
    "dbo.games",
    ["game_date", "game_hour"],
    [`game_id = ${game_id_num}`]
  );
  if (gameDetails[0]) {
    const date_hour_convert = convertDateAndHour(
      gameDetails[0].game_date,
      gameDetails[0].game_hour
    );
    const gameInFuture = checkIfGameDetailsInFuture(
      date_hour_convert.date,
      date_hour_convert.hour
    );
    // const gameInFuture = checkIfGameDetailsInFuture(
    //   gameDetails[0].game_date,
    //   gameDetails[0].game_hour
    // );

    if (gameInFuture) {
      return false;
    } else {
      return true;
    }
  }
}
//in use
async function getGameDetaildByID(game_id) {
  const game = await data_utils.getFromTable(
    "dbo.games",
    ["*"],
    [`game_id = ${game_id}`]
  );
  if (game[0]) {
    // game exist in the DB
    const gameEvents = await data_utils.getFromTable(
      "dbo.ScheduleEvents",
      ["*"],
      [`game_id = ${game_id}`]
    );
    // const gameEvents = await DButils.execQuery(
    //   `select * from ScheduleEvents WHERE game_id = ${game_id}`
    // );
    let gameEventsLits = [];
    gameEvents.map((event) => {
      gameEventsLits.push(event);
    });
    const occured = await checkIfGameOccur(game_id);
    const {
      game_date,
      game_hour,
      home_team,
      away_team,
      home_team_id,
      away_team_id,
      home_team_goal,
      away_team_goal,
      filed,
    } = game[0];
    let game_hour_split = String(game_hour).slice(16, 25);
    let game_date_split = String(game_date).slice(0, 15);
    // let game_date_split = new Date(game_date)
    //   .toLocaleDateString()
    //   .split(",")[0];
    return {
      game_id: game_id,
      game_date: game_date_split,
      game_hour: game_hour_split,
      home_team: home_team,
      away_team: away_team,
      home_team_id: home_team_id,
      away_team_id: away_team_id,
      home_team_goal: home_team_goal,
      away_team_goal: away_team_goal,
      filed: filed,
      eventSchedule: gameEventsLits,
    };
  } else {
    return "Game does not exist in DB";
  }
}
//in use
async function AddEventToGame(data) {
  try {
    const { game_id, date, hour, game_minute, event_type, player_id } = data;
    data_utils.insertinto(
      "dbo.ScheduleEvents",
      [
        "game_id",
        "event_date",
        "event_hour",
        "game_minute",
        "event_type",
        "player_id",
      ],
      [game_id, date1, hour1, game_minute, event_type, player_id]
    );
  } catch (error) {
    error;
  }
}
//in use
function checkIfGameDetailsInFuture(date, hour) {
  let check;
  const currentDate = new Date().toLocaleString().split(",");
  const toDay = new Date();
  const gameDate = new Date(date);
  if (toDay > gameDate) {
    check = false;
  } else if (toDay < gameDate) {
    check = true;
  } else {
    const nowHour = currentDate[1].split(":")[0];
    const gameHour = hour.split(":")[0];
    if (nowHour < gameHour) {
      check = true;
    } else {
      check = false;
    }
  }

  return check;
}
//in use
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
      ["home_team_id", "away_team_id", "field"],
      [`game_date ='${data.date}'`, `game_hour='${data.hour}'`]
    );

    if (
      gameAtSameTime.find(
        (x) =>
          x.home_team_id === data.home_team_id ||
          x.away_team_id === data.away_team_id
      )
    ) {
      message += "One or Both teams already embedded  in this time.\n";
    }
    if (gameAtSameTime.find((x) => x.field === data.field)) {
      message += "The field already embedded in this time";
    }
    return message;
  } catch {
    return "adding game faild";
  }
}
//in use
async function getAllLeagueGames() {
  try {
    const games = await data_utils.getFromTable("dbo.games", ["*"]);
    return games;
  } catch {
    return false;
  }
}
//in use
async function checkIFPlayerInGame(game_id, player_id) {
  try {
    game_id_num = Number(game_id);
    const gameDetails = await data_utils.getFromTable(
      "dbo.games",
      ["home_team_id", "away_team_id"],
      [`game_id = ${game_id_num}`]
    );
    if (gameDetails[0]) {
      const home_team_id = gameDetails[0].home_team_id;
      const away_team_id = gameDetails[0].away_team_id;
      const playerExist = await team_utils.checkPlayerInTeam(
        player_id,
        home_team_id,
        away_team_id
      );
      if (playerExist) {
        return true;
      }
      return false;
    }
    return false;
  } catch {
    return false;
  }
}

exports.AddGame = AddGame;
exports.AddScoresToGame = AddScoresToGame;
exports.checkIfGameOccur = checkIfGameOccur;
exports.getGameDetaildByID = getGameDetaildByID;
exports.AddEventToGame = AddEventToGame;
exports.checkIfGameDetailsInFuture = checkIfGameDetailsInFuture;
exports.getAllLeagueGames = getAllLeagueGames;
exports.checkGameDetails = checkGameDetails;
exports.checkIFPlayerInGame = checkIFPlayerInGame;
