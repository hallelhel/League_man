var express = require("express");
var router = express.Router();

const auth = require("../Domain_Layer/auth");

router.post("/register", async (req, res, next) => {
  const reqBody = req.body;
  const result = await auth.registerHundler(reqBody, next);
  res.status(result.status).send(result.message);
});

router.post("/login", async (req, res, next) => {
  const reqBody = req.body;
  const sessionUser = req.session.username;
  const result = await auth.loginHundler(reqBody, sessionUser, next);
  res.status(result.status).send(result.message);
});

router.post("/user/logOut", async (req, res) => {
  const sessionUser = req.session;
  const result = await auth.logoutHundler(sessionUser);
  res.status(result.status).send(result.message);
});

module.exports = router;
