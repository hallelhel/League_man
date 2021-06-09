var axios = require("axios");
const expect = require("chai").expect
let chaiHttp = require('chai-http');
let should = require('should');
const chaiAsPromised = require("chai-as-promised");
let chai = require('chai');
const api_domain = "http://localhost:3001";
chai.use(chaiHttp);
chai.use(chaiAsPromised);
const path = require("path")
const DButils = require(path.join(__dirname, '../','Domail','../Data_Layer/DButils'));
const bcrypt = require("bcryptjs");

describe('/Post games/LeagueManagment/addGame', ()=>{
    it('should return status code 200- vaild details', (done)=>{
        var agent = chai.request.agent(`${api_domain}`)
        agent.post('/login')
        .send({username: "admin", password: "admin123"})
        .end((err,res)=> {
            agent.post('/games/LeagueManagment/addGame')
            .send({
                date: "2022-1-31",
                hour: "22:30:00",
                away_team_id: 939,
                home_team_id: 1020,
                field: "test",
                referee_username: "noam"
                  })
            .end((err,res)=> {
                // res.should.have.status(200)
                res.status.should.be.equal(200);
                res.should.have.property('text').eql('Game added successfuly');
                done();
            })
        }) 
    })
    after(async function(){
        await DButils.execQuery(`DELETE FROM games WHERE field='test'`);
    })
})

describe('/Post LeagueManagment/addGame', function() {
    context('test', function(){
        it('should return status code 401- not admin', async function(){
            const res = await chai.request(`${api_domain}`)
            .post('/games/LeagueManagment/addGame')
            .send({date: "2027-1-31",
            hour: "22:30:00",
            away_team_id: 939,
            home_team_id: 1020,
            field: "test",
            referee_username: "noam"
              })
            expect(res.status).to.equal(401)
            expect(res.text).to.equal('Only admin can modify games in league');
        })
    })
})

describe('/Post games/LeagueManagment/addGame', ()=>{
    it('should return status code 400- team not exist', (done)=>{
        var agent = chai.request.agent(`${api_domain}`)
        agent.post('/login')
        .send({username: "admin", password: "admin123"})
        .end((err,res)=> {
            agent.post('/games/LeagueManagment/addGame')
            .send({
                date: "2021-07-31",
                hour: "22:30:00",
                away_team_id: 100,
                home_team_id: 1020,
                field: "test",
                referee_username: "noam"
                  })
            .end((err,res)=> {        
                res.status.should.be.equal(400);
                res.should.have.property('text').eql('One or both team details are incorrect');
                done();
            })
        }) 
    })
})
describe('/Post games/LeagueManagment/addGame', ()=>{
    it('should return status code 400 - team already embedded  in this time', (done)=>{
        var agent = chai.request.agent(`${api_domain}`)
        agent.post('/login')
        .send({username: "admin", password: "admin123"})
        .end((err,res)=> {
            agent.post('/games/LeagueManagment/addGame')
            .send({
                date: "2021-7-31",
                hour: "20:30:00",
                away_team_id: 939,
                home_team_id: 1020,
                field: "test",
                referee_username: "noam"
                  })
            .end((err,res)=> {        
                res.status.should.be.equal(400);
                res.should.have.property('text').eql('One or Both teams already embedded  in this time.\n');
                done();
            })
        }) 
    })
})

describe('/Post games/LeagueManagment/addGame', ()=>{
    it('should return status code 400 - team already embedded  in this time', (done)=>{
        var agent = chai.request.agent(`${api_domain}`)
        agent.post('/login')
        .send({username: "admin", password: "admin123"})
        .end((err,res)=> {
            agent.post('/games/LeagueManagment/addGame')
            .send({
                date: "2024-7-31",
                hour: "23:30:00",
                away_team_id: 939,
                home_team_id: 1020,
                field: "test",
                referee_username: "shay"
                  })
            .end((err,res)=> {        
                res.status.should.be.equal(400);
                res.should.have.property('text').eql("referee user didn't found on DB");
                done();
            })
        }) 
    })
})