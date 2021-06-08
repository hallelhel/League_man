// var axios = require("axios");
// const expect = require("chai").expect
// let chaiHttp = require('chai-http');
// const chaiAsPromised = require("chai-as-promised");
// let chai = require('chai');
// const api_domain = "http://localhost:3001";
// chai.use(chaiHttp);
// chai.use(chaiAsPromised);
// const path = require("path")
// const DButils = require(path.join(__dirname, '../','Domail','../Data_Layer/DButils'));
// const bcrypt = require("bcryptjs");

// describe('/Post LeagueManagment/addGame', function() {
//     context('with vaild details', function(){
//         it('should return status code 200', async function(){
//             const res = chai.request(`${api_domain}`)
//             .post('LeagueManagment/addGame')
//             .send({"date": "2022-10-31","hour": "20:30:00",
//                 "away_team_id": 939,
//                 "home_team_id": 1020,
//                 "field": "Tedi",
//                 "referee_username": "noam"
//               })
//               expect((await res).status).to.equal(200);
//         }) 
//     })
//     after(async function(){
//         await DButils.execQuery("DELETE FROM games WHERE date='2022-10-31'");
//     })
// })

// describe('/Post LeagueManagment/addGame', function() {
//     context('with vaild details', function(){
//         it('should return status code 400', async function(){
//             const res =await chai.request(`${api_domain}`)
//             .post('LeagueManagment/addGame')
//             .send({date: "2022-11-31",hour: "20:30:00",
//                 away_team_id: 100,
//                 home_team_id: 1020,
//                 field: "Tedi",
//                 referee_username: "noam"
//               })
//               expect((await res).status).to.equal(400);
//               expect(res.text).to.equal('One or both team details are incorrect created');
//         }) 
//     })
//     after(async function(){
//         await DButils.execQuery("DELETE FROM games WHERE date='2022-10-31'");
//     })
// })