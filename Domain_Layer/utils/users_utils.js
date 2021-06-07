const DButils = require("../../Data_Layer/DButils");
const data_utils = require("../../Data_Layer/sqlScripts");
//in use

async function getAllUsers() {
  const users = await data_utils.getFromTable("dbo.Users", ["*"]);
  // const users = await DButils.execQuery("select * from dbo.Users");
  return users;
}
//in use
async function getUserDetails(username) {
  const user = await data_utils.getFromTable(
    "dbo.Users",
    ["*"],
    [`username='${username}'`]
  );
  // const user = await DButils.execQuery(
  //   `select * from dbo.Users WHERE username='${username}'`
  // );
  return user;
}


exports.generateText= (name, age) => {
  // Returns output text
  
  return `${name} (${age} years old)`;
};



// // async function getUserFavoriteGames(){
// //   return await DButils.execQuery(`select * from dbo.userFavoriteGames`);
// // }


exports.getAllUsers = getAllUsers;
exports.getUserDetails = getUserDetails;
// exports.generateText = generateText;
