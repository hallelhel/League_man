const data_utils = require("../../Data_Layer/sqlScripts");
//in use

async function getAllUsers() {
  const users = await data_utils.getFromTable("dbo.Users", ["*"]);
  return users;
}
//in use
async function getUserDetails(username) {
  const user = await data_utils.getFromTable(
    "dbo.Users",
    ["*"],
    [`username='${username}'`]
  );
  return user;
}



exports.getAllUsers = getAllUsers;
exports.getUserDetails = getUserDetails;

