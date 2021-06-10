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


describe('Unit game in future', function()
{
    context('test - date in future', function()
    {
      it('details correct', async function() 
      {
        data ={
            date: "2025-5-29",
            hour: "20:30:00",
            }
        let res = await games_utils.checkIfGameDetailsInFuture(data.date,data.hour);
        expect(res).to.equal(true);
        });
    });
})

describe('Unit game in future', function()
{
    context('test - date in future', function()
    {
      it('details uncorrect', async function() 
      {
        data ={
            date: "2020-5-29",
            hour: "20:30:00",
            }
        let res = await games_utils.checkIfGameDetailsInFuture(data.date,data.hour);
        expect(res).to.equal(false);
        });
    });
})

describe('Unit game today', function()
{
    context('test - time pass', function()
    {
      it('details uncorrect', async function() 
      {
        data ={
            date: "2021-6-10",
            hour: "11:30:00",
            }
        let res = await games_utils.checkIfGameDetailsInFuture(data.date,data.hour);
        expect(res).to.equal(false);
        });
    });
})

