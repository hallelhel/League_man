
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

describe('/POST login', function(){
  before(async function(){
    await DButils.execQuery("INSERT INTO Users (username,password) VALUES 'testUser', 'testPassword'")
  })
  context('test', function(){
    it('OK, Correct username and password', async function() {
      const res = await chai.request(`${api_domain}`)
      .post('/login')
      .send({username: "testUser", password: "testPassword"})
      expect(res.statuse).to.equal(200)
      expect(res.headers).to.have.property('set-cookie');
    })
  })
  after(async function() {
    await DButils.execQuery("DELETE FROM Users WHERE username=testUser")
  })
  
})