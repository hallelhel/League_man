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

describe('auth login Handler', function(){
  before(async function(){
    const res = await DButils.execQuery(`SELECT username FROM Users WHERE username='testLogInFail'`);
    if(res[0]){
      await DButils.execQuery(`DELETE FROM Users WHERE username='testLogInFail'`);
      await DButils.execQuery(`DELETE FROM role WHERE username='testLogInFail'`);
    }  
  })
  context('test auth user login handler', function(){
    it('user is not in db- login fail', async function() {
      function next(err) {
        // signal to exit route
        if (err && err === 'route') {
          return done();
        }
        
        // signal to exit router
        if (err && err === 'router') {
          return done(err)
        }
        
        var layer = stack[idx++];
        if (!layer) {
          return done(err);
        }
        
        if (layer.method && layer.method !== method) {
          return next(err);
        }
        
        if (err) {
          layer.handle_error(err, req, res, next);
        } else {
          layer.handle_request(req, res, next);
        }
      }
      const value = await auth.loginHundler(
        {username: "testLogInFail", password: "asd"},null,
        next);
      expect(value.status).to.equal(401)
      expect(value.message).to.equal("Username or Password incorrect");
        })
  })
  // after(async function(){
  //   const res = await chai.request(`${api_domain}`)
  //   .post('/register')
  //   .send({  username: "test",
  //   firstname: "test",
  //   lastname: "test",
  //   country: "test",
  //   password: "test",
  //   email: "test@test.test",
  //   picture: "test",
  //   role: "test"});
  // })
})

describe('auth login Handler', function(){
    before(async function(){
        const res = await chai.request(`${api_domain}`)
        .post('/register')
        .send({  username: "testLoginSuccess",
        firstname: "test",
        lastname: "test",
        country: "test",
        password: "test",
        email: "test@test.test",
        picture: "test",
        role: "test"});
      
    })
    context('test auth user login handler', function(){
      it('user is in db- login succseed', async function() {
        function next(err) {
          // signal to exit route
          if (err && err === 'route') {
            return done();
          }
          
          // signal to exit router
          if (err && err === 'router') {
            return done(err)
          }
          
          var layer = stack[idx++];
          if (!layer) {
            return done(err);
          }
          
          if (layer.method && layer.method !== method) {
            return next(err);
          }
          
          if (err) {
            layer.handle_error(err, req, res, next);
          } else {
            layer.handle_request(req, res, next);
          }
        }
        const value = await auth.loginHundler(
          {username: "testLoginSuccess", password: "test"},null,
          next);
        expect(value.status).to.equal(200)
        expect(value.message).to.equal("login succeeded");
          })
    })
    after(async function(){
        await DButils.execQuery(`DELETE FROM Users WHERE username='testLoginSuccess'`);
        await DButils.execQuery(`DELETE FROM role WHERE username='testLoginSuccess'`);
        
    })
  })

describe('auth login Handler', function(){
  before(async function(){
      const res = await chai.request(`${api_domain}`)
      .post('/register')
      .send({  username: "testLoginAlreadyLOgedIn",
      firstname: "test",
      lastname: "test",
      country: "test",
      password: "test",
      email: "test@test.test",
      picture: "test",
      role: "test"});
    
  })
  context('test auth user login handler', function(){
  it('user already loged in', async function() {
    function next(err) {
      // signal to exit route
      if (err && err === 'route') {
        return done();
      }
      
      // signal to exit router
      if (err && err === 'router') {
        return done(err)
      }
      
      var layer = stack[idx++];
      if (!layer) {
        return done(err);
      }
      
      if (layer.method && layer.method !== method) {
        return next(err);
      }
      
      if (err) {
        layer.handle_error(err, req, res, next);
      } else {
        layer.handle_request(req, res, next);
      }
    }
    const value = await auth.loginHundler(
      {username: "testLoginAlreadyLOgedIn", password: "test"},'testLoginAlreadyLOgedIn',
      next);
    expect(value.status).to.equal(401)
    expect(value.message).to.equal("User already loged-in");
      })
  })
  after(async function(){
    await DButils.execQuery(`DELETE FROM Users WHERE username='testLoginAlreadyLOgedIn'`);
    await DButils.execQuery(`DELETE FROM role WHERE username='testLoginAlreadyLOgedIn'`);
    
  })
})


  

