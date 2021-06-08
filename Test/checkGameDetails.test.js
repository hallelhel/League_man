var axios = require("axios");
const expect = require("chai").expect
let chaiHttp = require('chai-http');
const chaiAsPromised = require("chai-as-promised");
let chai = require('chai');
chai.use(chaiHttp);
chai.use(chaiAsPromised);
const path = require("path")
const DButils = require(path.join(__dirname, '../','Domail','../Data_Layer/DButils'));
const games_utils = require("../Domain_Layer/utils/games_utils");

//pass
describe('#checkGameDetails(data)', function() {
    context('activate function',function(){
        it('game data', async function(){
            data = {
                    "date": "2021-5-31",
                    "hour": "20:30:00",
                    "away_team_id": 939,
                    "home_team_id": 1020,
                    "field": "Tedi",
                    "referee_username": "noam"
                  }
            let res = await games_utils.checkGameDetails(data);
            expect(res).to.equal("adding game faild");
        })
    })
});


//pass
// describe('#checkIfTeamExist(team_id)', function() {
//     context('activate function',function(){
//         it('team not exist', async function(){
//             let res = await teams_utils.checkIfTeamExist(2650);
//             expect(res).to.equal(false);
//         })
//     })
// });
// async function checkGameDetails(data) {
//     try {
//       let message = "";
//       let referee_username = data.referee_username;
//       let refereeCheck = await data_utils.getFromTable(
//         "dbo.role",
//         ["username", "role"],
//         [`username='${referee_username}'`, `role='referee'`]
//       );
//       if (!refereeCheck[0]) {
//         return `referee user didn't found on DB`;
//       }
//       let gameAtSameTime = await data_utils.getFromTable(
//         "dbo.games",
//         ["home_team_id", "away_team_id", "field"],
//         [`game_date ='${data.date}'`, `game_hour='${data.hour}'`]
//       );
  
//       if (
//         gameAtSameTime.find(
//           (x) =>
//             x.home_team_id === data.home_team_id ||
//             x.away_team_id === data.away_team_id
//         )
//       ) {
//         message += "One or Both teams already embedded  in this time.\n";
//       }
//       if (gameAtSameTime.find((x) => x.field === data.field)) {
//         message += "The field already embedded in this time";
//       }
//       return message;
//     } catch {
//       return "adding game faild";
//     }
//   }