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
const bcrypt = require("bcryptjs");

// describe('/Post games/LeagueManagment/addGame', ()=>{
//     it('should return status code 200', (done)=>{
//         var admin = chai.request.admin(`${api_domain}`)
//         admin.post('/login')
//         .send({username: "admin", password: "admin123"})
//         .end((err,res)=> {
//             admin.post('/games/LeagueManagment/addGame')
//             .send({date: "2024-1-31",
//                     hour: "22:30:00",
//                     away_team_id: 939,
//                     home_team_id: 1020,
//                     field: "test",
//                     referee_username: "noam"
//                       })
//             .end((err,res)=> {
//                 res.should.have.status(200)
//                 res.should.have.property('text').eql('Game added successfuly');
//                 done();
//             })
//         }) 
//     })
//     after(async function(){
//         await DButils.execQuery(`DELETE FROM games WHERE field='test'`);
//     })
// })
//     // before(async function(){
//     //     const resout= await chai.request(`${api_domain}`)
//     //     .post('/user/logOut');
//     //     const reslog= await chai.request(`${api_domain}`)
//     //     .post('/login')
//     //     .send({username: "admin", password: "admin123"})
//     // })
//     // context('test', function(){
//     //     it('should return status code 200', async function(){
//     //         const res = await chai.request(`${api_domain}`)
//     //         .post('/games/LeagueManagment/addGame')
//     //         .send({date: "2024-1-31",
//     //         hour: "22:30:00",
//     //         away_team_id: 939,
//     //         home_team_id: 1020,
//     //         field: "test",
//     //         referee_username: "noam"
//     //           })
//     //         expect(res.status).to.equal(200)
//     //         expect(res.text).to.equal('Game added successfuly');
//     //     }) 
//     // })
// // // describe('/Post LeagueManagment/addGame', function() {
// // //     context('with vaild details', function(){
// // //         it('should return status code 400', async function(){
// // //             const res =await chai.request(`${api_domain}`)
// // //             .post('LeagueManagment/addGame')
// // //             .send({date: "2022-11-31", hour: "20:30:00",
// // //                 away_team_id: 100,
// // //                 home_team_id: 1020,
// // //                 field: "Tedi",
// // //                 referee_username: "noam"
// // //               })
// // //               expect(res.status).to.equal(400);
// // //               expect(res.text).to.equal('One or both team details are incorrect created');
// // //         }) 
// // //     })
// // //     after(async function(){
// // //         await DButils.execQuery("DELETE FROM games WHERE date='2022-10-31'");
// // //     })
// // // })

describe('/Post games/LeagueManagment/addGame', ()=>{
    it('should return status code 200', (done)=>{
        var agent = chai.request.agent(`${api_domain}`)
        agent.post('/login')
        .send({username: "admin", password: "admin123"})
        .end((err,res)=> {
            console.log(res.status)
            agent.post('/games/LeagueManagment/addGame')
            .send({date: "2024-1-31",
                    hour: "22:30:00",
                    away_team_id: 939,
                    home_team_id: 1020,
                    field: "test",
                    referee_username: "noam"
                      })
            .end((err,res)=> {
                console.log(res.status)
                // res.should.have.status(200)
                res.status.should.be.eql(200)
                res.should.have.property('text').eql('Game added successfuly');
                done();
            })
        }) 
    })
})