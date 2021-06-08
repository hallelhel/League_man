
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

describe('/POST login', function(){
  before(async function(){
    let hash_password = bcrypt.hashSync(
      'testPassword',
      parseInt(process.env.bcrypt_saltRounds)
    );
    await DButils.execQuery(`INSERT INTO dbo.Users (username, firstname, lastname, country, password, email, picture) VALUES ('testUser', 'aviran', 'giat', 'israel', '${hash_password}', 'kotlar@post.bgu.ac.il', 'path')`);
    // "INSERT INTO dbo.Users (username, firstname, lastname, country, password, email, picture) VALUES ('noam11', 'aviran', 'giat', 'israel', '$2a$13$CZaoUVxCn8JXBHuy8RjXCuKucVt0tmq2VZglueq6gsqeqGg430oGC', 'kotlar@post.bgu.ac.il', 'path')"
  })
  context('test', function(){
    it('OK, Correct username and password', async function() {
      const res = await chai.request(`${api_domain}`)
      .post('/login')
      .send({username: "testUser", password: "testPassword"})
      expect(res.status).to.equal(200);
        })
  })
  after(async function() {
    await DButils.execQuery("DELETE FROM Users WHERE username='testUser'");
  })
  
})