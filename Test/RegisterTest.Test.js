
// const app = require('./auth-copy-testing') // Link to your server file
// const supertest = require('supertest')
// const request = supertest(app)

// // it('Testing to see if Jest works', () => {
// //     expect(1).toBe(1)
// //   })

// it('Gets the test endpoint', async done => {
//     // Sends GET Request to /test endpoint
//     const res = await request.get('/test')
//     expect(response.status).toBe(200)
//     expect(response.body.message).toBe('pass!')

//     // ...
//     done()
//   })
//   //

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

describe('/POST register - ok', function(){
  before(async function(){
    const res = await DButils.execQuery(`SELECT username FROM Users WHERE username='registerTestUser'`);
    if(res[0]){
      await DButils.execQuery(`DELETE FROM Users WHERE username='registerTestUser'`);
      await DButils.execQuery(`DELETE FROM role WHERE username='registerTestUser'`);
    }
  })
  context('test', function(){
    it('user is not in db- register succeed', async function() {
      const res = await chai.request(`${api_domain}`)
      .post('/register')
      .send({  username: "registerTestUser",
      firstname: "test",
      lastname: "test",
      country: "test",
      password: "test",
      email: "test@test.test",
      picture: "test",
      role: "test"})
      expect(res.status).to.equal(201)
      expect(res.text).to.equal('user created');
        })
  })
  after(async function(){
    const res = await DButils.execQuery(`SELECT username FROM Users WHERE username='registerTestUser'`);
    if(res[0]){
      await DButils.execQuery(`DELETE FROM Users WHERE username='registerTestUser'`);
      await DButils.execQuery(`DELETE FROM role WHERE username='registerTestUser'`);
    }
  })
})

describe('/POST register- user name taken', function(){
  before(async function(){
    const res = await chai.request(`${api_domain}`)
    .post('/register')
    .send({  username: "registerTestUser2",
    firstname: "test",
    lastname: "test",
    country: "test",
    password: "test",
    email: "test@test.test",
    picture: "test",
    role: "test"})
  })
  context('test', function(){
    it('user is in db- register request denied', async function() {
      const res = await chai.request(`${api_domain}`)
      .post('/register')
      .send({  username: "registerTestUser2",
      firstname: "test",
      lastname: "test",
      country: "test",
      password: "test",
      email: "test@test.test",
      picture: "test",
      role: "test"})
      expect(res.status).to.equal(409)
      expect(res.text).to.equal('Username taken');
        })
  })
  after(async function(){
    const res = await DButils.execQuery(`SELECT username FROM Users WHERE username='registerTestUser2'`);
    if(res[0]){
      await DButils.execQuery(`DELETE FROM Users WHERE username='registerTestUser2'`);
      await DButils.execQuery(`DELETE FROM role WHERE username='registerTestUser2'`);
    }
  })
  })
  

