
var axios = require("axios");
const expect = require("chai").expect
let chaiHttp = require('chai-http');
const chaiAsPromised = require("chai-as-promised");
let chai = require('chai');
chai.use(chaiHttp);
chai.use(chaiAsPromised);
const path = require("path")
const DButils = require(path.join(__dirname, '../','Domail','../Data_Layer/DButils'));
const games = require("../Domain_Layer/games");

describe('authnticate League Manager Test', function(){
    before(async function(){
        function next(err) {
            var layerError = err === 'route'
              ? null
              : err;
            
            // remove added slash
            if (slashAdded) {
              req.url = req.url.substr(1);
              slashAdded = false;
            }
            
            // restore altered req.url
            if (removed.length !== 0) {
              req.baseUrl = parentUrl;
              req.url = protohost + removed + req.url.substr(protohost.length);
              removed = '';
            }
            
            // signal to exit router
            if (layerError === 'router') {
              setImmediate(done, null)
              return
            }
            
            // no more matching layers
            if (idx >= stack.length) {
              setImmediate(done, layerError);
              return;
            }
            
            // get pathname of request
            var path = getPathname(req);
            
            if (path == null) {
              return done(layerError);
            }
            
            // find next matching layer
            var layer;
            var match;
            var route;
            
            while (match !== true && idx < stack.length) {
              layer = stack[idx++];
              match = matchLayer(layer, path);
              route = layer.route;
            
              if (typeof match !== 'boolean') {
                // hold on to layerError
                layerError = layerError || match;
              }
            
              if (match !== true) {
                continue;
              }
            
              if (!route) {
                // process non-route handlers normally
                continue;
              }
            
              if (layerError) {
                // routes do not match with a pending error
                match = false;
                continue;
              }
            
              var method = req.method;
              var has_method = route._handles_method(method);
            
              // build up automatic options response
              if (!has_method && method === 'OPTIONS') {
                appendMethods(options, route._options());
              }
            
              // don't even bother matching route
              if (!has_method && method !== 'HEAD') {
                match = false;
                continue;
              }
            }
            
            // no match
            if (match !== true) {
              return done(layerError);
            }
            
            // store route for dispatch on change
            if (route) {
              req.route = route;
            }
            
            // Capture one-time layer values
            req.params = self.mergeParams
              ? mergeParams(layer.params, parentParams)
              : layer.params;
            var layerPath = layer.path;
            
            // this should be done for the layer
            self.process_params(layer, paramcalled, req, res, function (err) {
              if (err) {
                return next(layerError || err);
              }
            
              if (route) {
                return layer.handle_request(req, res, next);
              }
            
              trim_prefix(layer, layerError, layerPath, path);
            });
          }
        const res = await DButils.execQuery(`SELECT username FROM Users WHERE username='admin'`);
        if(!res[0]){
            const value = await auth.registerHundler(
                {
                username: "admin",
                lastname: "admin",
                country: "admin",
                password: "admin123",
                email: "admin@admin.admin",
                picture: "admin",
                role: "admin",
                },next);
        }  
        })
    context('test authnticate League Manager - correct', function(){
      it('given admin user', async function() {
        function next(err) {
            var layerError = err === 'route'
              ? null
              : err;
            
            // remove added slash
            if (slashAdded) {
              req.url = req.url.substr(1);
              slashAdded = false;
            }
            
            // restore altered req.url
            if (removed.length !== 0) {
              req.baseUrl = parentUrl;
              req.url = protohost + removed + req.url.substr(protohost.length);
              removed = '';
            }
            
            // signal to exit router
            if (layerError === 'router') {
              setImmediate(done, null)
              return
            }
            
            // no more matching layers
            if (idx >= stack.length) {
              setImmediate(done, layerError);
              return;
            }
            
            // get pathname of request
            var path = getPathname(req);
            
            if (path == null) {
              return done(layerError);
            }
            
            // find next matching layer
            var layer;
            var match;
            var route;
            
            while (match !== true && idx < stack.length) {
              layer = stack[idx++];
              match = matchLayer(layer, path);
              route = layer.route;
            
              if (typeof match !== 'boolean') {
                // hold on to layerError
                layerError = layerError || match;
              }
            
              if (match !== true) {
                continue;
              }
            
              if (!route) {
                // process non-route handlers normally
                continue;
              }
            
              if (layerError) {
                // routes do not match with a pending error
                match = false;
                continue;
              }
            
              var method = req.method;
              var has_method = route._handles_method(method);
            
              // build up automatic options response
              if (!has_method && method === 'OPTIONS') {
                appendMethods(options, route._options());
              }
            
              // don't even bother matching route
              if (!has_method && method !== 'HEAD') {
                match = false;
                continue;
              }
            }
            
            // no match
            if (match !== true) {
              return done(layerError);
            }
            
            // store route for dispatch on change
            if (route) {
              req.route = route;
            }
            
            // Capture one-time layer values
            req.params = self.mergeParams
              ? mergeParams(layer.params, parentParams)
              : layer.params;
            var layerPath = layer.path;
            
            // this should be done for the layer
            self.process_params(layer, paramcalled, req, res, function (err) {
              if (err) {
                return next(layerError || err);
              }
            
              if (route) {
                return layer.handle_request(req, res, next);
              }
            
              trim_prefix(layer, layerError, layerPath, path);
            });
          }
        const requ = {
            session:{username:'admin'},
            username:'admin',
        }
        await games.authnticateLeagueManager(requ,next);
          })
    })
  })

  describe('authnticate League Manager Test', function(){
    before(async function(){
        function next(err) {
            var layerError = err === 'route'
              ? null
              : err;
            
            // remove added slash
            if (slashAdded) {
              req.url = req.url.substr(1);
              slashAdded = false;
            }
            
            // restore altered req.url
            if (removed.length !== 0) {
              req.baseUrl = parentUrl;
              req.url = protohost + removed + req.url.substr(protohost.length);
              removed = '';
            }
            
            // signal to exit router
            if (layerError === 'router') {
              setImmediate(done, null)
              return
            }
            
            // no more matching layers
            if (idx >= stack.length) {
              setImmediate(done, layerError);
              return;
            }
            
            // get pathname of request
            var path = getPathname(req);
            
            if (path == null) {
              return done(layerError);
            }
            
            // find next matching layer
            var layer;
            var match;
            var route;
            
            while (match !== true && idx < stack.length) {
              layer = stack[idx++];
              match = matchLayer(layer, path);
              route = layer.route;
            
              if (typeof match !== 'boolean') {
                // hold on to layerError
                layerError = layerError || match;
              }
            
              if (match !== true) {
                continue;
              }
            
              if (!route) {
                // process non-route handlers normally
                continue;
              }
            
              if (layerError) {
                // routes do not match with a pending error
                match = false;
                continue;
              }
            
              var method = req.method;
              var has_method = route._handles_method(method);
            
              // build up automatic options response
              if (!has_method && method === 'OPTIONS') {
                appendMethods(options, route._options());
              }
            
              // don't even bother matching route
              if (!has_method && method !== 'HEAD') {
                match = false;
                continue;
              }
            }
            
            // no match
            if (match !== true) {
              return done(layerError);
            }
            
            // store route for dispatch on change
            if (route) {
              req.route = route;
            }
            
            // Capture one-time layer values
            req.params = self.mergeParams
              ? mergeParams(layer.params, parentParams)
              : layer.params;
            var layerPath = layer.path;
            
            // this should be done for the layer
            self.process_params(layer, paramcalled, req, res, function (err) {
              if (err) {
                return next(layerError || err);
              }
            
              if (route) {
                return layer.handle_request(req, res, next);
              }
            
              trim_prefix(layer, layerError, layerPath, path);
            });
          }
        const res = await DButils.execQuery(`SELECT username FROM Users WHERE username='admin'`);
        if(!res[0]){
            const value = await auth.registerHundler(
                {
                username: "admin",
                lastname: "admin",
                country: "admin",
                password: "admin123",
                email: "admin@admin.admin",
                picture: "admin",
                role: "admin",
                },next);
        }  
        })
    context('test authnticate League Manager - incorrect', function(){
      it('given noam as user', async function() {
        function next(err) {
            var layerError = err === 'route'
              ? null
              : err;
            
            // remove added slash
            if (slashAdded) {
              req.url = req.url.substr(1);
              slashAdded = false;
            }
            
            // restore altered req.url
            if (removed.length !== 0) {
              req.baseUrl = parentUrl;
              req.url = protohost + removed + req.url.substr(protohost.length);
              removed = '';
            }
            
            // signal to exit router
            if (layerError === 'router') {
              setImmediate(done, null)
              return
            }
            
            // no more matching layers
            if (idx >= stack.length) {
              setImmediate(done, layerError);
              return;
            }
            
            // get pathname of request
            var path = getPathname(req);
            
            if (path == null) {
              return done(layerError);
            }
            
            // find next matching layer
            var layer;
            var match;
            var route;
            
            while (match !== true && idx < stack.length) {
              layer = stack[idx++];
              match = matchLayer(layer, path);
              route = layer.route;
            
              if (typeof match !== 'boolean') {
                // hold on to layerError
                layerError = layerError || match;
              }
            
              if (match !== true) {
                continue;
              }
            
              if (!route) {
                // process non-route handlers normally
                continue;
              }
            
              if (layerError) {
                // routes do not match with a pending error
                match = false;
                continue;
              }
            
              var method = req.method;
              var has_method = route._handles_method(method);
            
              // build up automatic options response
              if (!has_method && method === 'OPTIONS') {
                appendMethods(options, route._options());
              }
            
              // don't even bother matching route
              if (!has_method && method !== 'HEAD') {
                match = false;
                continue;
              }
            }
            
            // no match
            if (match !== true) {
              return done(layerError);
            }
            
            // store route for dispatch on change
            if (route) {
              req.route = route;
            }
            
            // Capture one-time layer values
            req.params = self.mergeParams
              ? mergeParams(layer.params, parentParams)
              : layer.params;
            var layerPath = layer.path;
            
            // this should be done for the layer
            self.process_params(layer, paramcalled, req, res, function (err) {
              if (err) {
                return next(layerError || err);
              }
            
              if (route) {
                return layer.handle_request(req, res, next);
              }
            
              trim_prefix(layer, layerError, layerPath, path);
            });
          }
        const requ = {
            session:{username:'noam'},
            username:'noam',
        }
        await games.authnticateLeagueManager(requ,next);
          })
    })
  })

