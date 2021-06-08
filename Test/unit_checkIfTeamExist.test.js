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
const teams_utils = require("../Domain_Layer/utils/teams_utils");

//pass
describe('#checkIfTeamExist(team_id)', function() {
    context('activate function',function(){
        it('team exist', async function(){
            let res = await teams_utils.checkIfTeamExist(939);
            expect(res).to.equal(true);
        })
    })
});
//faild
describe('#checkIfTeamExist(team_id)', function() {
    context('activate function',function(){
        it('team not exist', async function(){
            let res = await teams_utils.checkIfTeamExist(2650);
            expect(res).to.equal(false);
        })
    })
});
