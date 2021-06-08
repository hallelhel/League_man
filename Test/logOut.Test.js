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

describe('/POST logOut', function(){

  context('test', function(){
    it('user is not loged in', async function() {
      const res = await chai.request(`${api_domain}`)
      .post('/user/logOut')
      expect(res.status).to.equal(400)
      expect(res.text).to.equal('No user to logout.');
        })
  })  
})

// describe('/POST logOut', function(){
//   before(async function(){
//     const res = await chai.request(`${api_domain}`)
//   .post('/login')
//   .send({username: "testUser", password: "testPassword"})
//   })
//   context('test', function(){
//     it('user loged in- loged out success', async function() {
//       const res = await chai.request(`${api_domain}`)
//       .post('/user/logOut')
//       // .send(sessionUser='test')
//       expect(res.status).to.equal(200)
//       expect(res.text).to.equal('logout succeeded');
//         })
//   })  
//   })