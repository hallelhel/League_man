var express = require("express");
var router = express.Router();

const users = require("../Domain_Layer/users");

router.use(async function (req, res, next) {
  if (req.session && req.session.username) {
    //clieant verification
    await users.verificationUser(req, next);
  } else {
    res.sendStatus(401);
  }
});

router.get("/allUsersDetails", async (req, res, next) => {
  const sessionUser = req.session.username;
  const result = await users.usersDetaileHundler(sessionUser, next);
  res.status(result.status).send(result.message);
});

router.get("/userDetails", async (req, res, next) => {
  const sessionUser = req.session.username;
  const result = await users.userDetailHundler(resessionUser, next);
  res.status(result.status).send(result.message);
});

module.exports = router;
