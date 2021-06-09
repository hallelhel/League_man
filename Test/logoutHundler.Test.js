var axios = require("axios");
const expect = require("chai").expect;
let chaiHttp = require("chai-http");
const chaiAsPromised = require("chai-as-promised");
let chai = require("chai");
const api_domain = "http://localhost:3001";
chai.use(chaiHttp);
chai.use(chaiAsPromised);
const path = require("path");
const games = require("../Domain_Layer/utils/games_utils");
const DButils = require("../Data_Layer/DButils");
const bcrypt = require("bcryptjs");
const auth = require("../Domain_Layer/auth");

describe('auth logout Handler', function(){
  context('test auth user logOut handler', function(){
    it('user is not sigend in- log out fail', async function() {
      const value = await auth.logoutHundler({username: null});
      expect(value.status).to.equal(400)
      expect(value.message).to.equal("No user to logout.");
        })
  })
})

describe('auth logout Handler', function(){
    context('test auth user logOut handler', function(){
      it('user sigend in- log out success', async function() {
        function reset() {return true;}
        const value = await auth.logoutHundler({username: 'test', reset});
        expect(value.status).to.equal(200)
        expect(value.message).to.equal("logout succeeded");
          })
    })
  })
  


  

