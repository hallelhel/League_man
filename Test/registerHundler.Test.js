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

describe('auth register handler', function(){
  before(async function(){
    await DButils.execQuery(`DELETE FROM Users WHERE username='test'`);
    await DButils.execQuery(`DELETE FROM role WHERE username='test'`);
    
  })
  context('test auth userRegister handler', function(){
    it('user is not in db- register succeed', async function() {
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
      const value = await auth.registerHundler(
        {
          username: "test",
          firstname: "test",
          lastname: "test",
          country: "test",
          password: "test",
          email: "test@test.test",
          picture: "test",
          role: "test",
        },
        next);
      expect(value.status).to.equal(201)
      expect(value.message).to.equal("user created");
        })
  })
})

describe('auth register handler', function(){
  context('test auth userRegister handler', function(){
    it('user taken- register fail', async function() {
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
      const value = await auth.registerHundler(
        {
          username: "test",
          firstname: "test",
          lastname: "test",
          country: "test",
          password: "test",
          email: "test@test.test",
          picture: "test",
          role: "test",
        },
        next);
      expect(value.status).to.equal(409)
      expect(value.message).to.equal("Username taken");
        })
  })
})

describe('auth register handler', function(){
  context('test auth userRegister handler', function(){
    it('fault data, faild', async function() {
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
      const value = await auth.registerHundler(
        {
          username: "failtest",
          lastname: "test",
          country: "test",
          password: "test",
          email: "test@test.test",
          picture: "test",
          role: "test",
        },
        next);
      expect(value.status).to.equal(400)
      expect(value.message).to.equal("user not created, error");
        })
  })
})


  

