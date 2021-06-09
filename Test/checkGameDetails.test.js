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
describe('checkGameDetails(data)', function() {
    context('teams and field not free',function(){
        it('game data', async function(){
            data = 
                  {
                    date: "2022-5-29",
                    hour: "20:30:00",
                    away_team_id: 939,
                    home_team_id: 1020,
                    field: "Tedi",
                    referee_username: "noam",
                  }
            let res = await games_utils.checkGameDetails(data);
            expect(res).to.equal(`One or Both teams already embedded  in this time.\nThe field already embedded in this time`);
        })
    })
});

describe('checkGameDetails-teams not free', function() {
    context('teams not free',function(){
        it('game data', async function(){
            data = 
                  {
                    date: "2022-5-29",
                    hour: "20:30:00",
                    away_team_id: 939,
                    home_team_id: 1020,
                    field: "Bloomfield",
                    referee_username: "noam",
                  }
            let res = await games_utils.checkGameDetails(data);
            expect(res).to.equal(`One or Both teams already embedded  in this time.\n`);
        })
    })
});


describe('checkGameDetails-referee', function() {
    context('referee doesnt exist',function(){
        it('referee test in game details', async function(){
            data = 
                  {
                    date: "2022-5-29",
                    hour: "20:30:00",
                    away_team_id: 939,
                    home_team_id: 1020,
                    field: "Tedi",
                    referee_username: "hallel",
                  }
            let res = await games_utils.checkGameDetails(data);
            expect(res).to.equal(`referee user didn't found on DB`);
        })
    })
});

describe('checkGameDetails- valid details', function() {
    context('game details valid',function(){
        it('game data', async function(){
            data = 
                  {
                    date: "2022-8-29",
                    hour: "20:30:00",
                    away_team_id: 939,
                    home_team_id: 1020,
                    field: "Tedi",
                    referee_username: "noam",
                  }
            let res = await games_utils.checkGameDetails(data);
            expect(res).to.equal(``);
        })
    })
});