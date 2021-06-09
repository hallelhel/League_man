var axios = require("axios");
const expect = require("chai").expect
let chaiHttp = require('chai-http');
const chaiAsPromised = require("chai-as-promised");
let chai = require('chai');
const api_domain = "http://localhost:3001";
chai.use(chaiHttp);
chai.use(chaiAsPromised);
const path = require("path")
const DButils = require(path.join(__dirname, '../','Domail','../Data_Layer/DButils'));
const games_utils = require("../Domain_Layer/utils/games_utils");


describe('Unit Add Game', function()
{
    context('test - add game after check details', function()
    {
      it('all details correct', async function() 
      {
        data ={
            date: "2025-5-29",
            hour: "20:30:00",
            away_team_id: 939,
            home_team_id: 1020,
            field: "Tedi_test",
            referee_username: "noam",
            }
        let res = await games_utils.AddGame(data);
        expect(res).to.equal(true);
        })
    })
    after(async function() {
      await DButils.execQuery("DELETE FROM games WHERE field='Tedi_test'");
    });
});



