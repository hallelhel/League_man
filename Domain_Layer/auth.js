var express = require("express");
var router = express.Router();
const DButils = require("../Data_Layer/DButils");
const bcrypt = require("bcryptjs");
const data_utils = require("../Data_Layer/sqlScripts");


router.post("/register", async (req, res, next) => {
  try {
    // parameters exists
    // valid parameters
    // username exists

    let users = await data_utils.getFromTable("dbo.Users", ["username"]);
    if (users.find((x) => x.username === req.body.username))
      throw { status: 409, message: "Username taken" };

    //hash the password
    let hash_password = bcrypt.hashSync(
      req.body.password,
      parseInt(process.env.bcrypt_saltRounds)
    );
    req.body.password = hash_password;

    // add the new username
    const {username, firstname, lastname, country, password, email, picture, Role} = req.body;
    let status = await data_utils.insertinto('dbo.Users',['username', 'firstname', 'lastname', 'country', 'password', 'email', 'picture', 'Role'],
      [username, firstname, lastname, country, password, email, picture, Role]);
    if (!status){res.status(400).send("user not created, error")}
    else{res.status(201).send("user created");}
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    let user = await data_utils.getFromTable('dbo.Users', ['*'],[`username='${req.body.username}'`])
    user = user[0]
    // const user = (
    //   await DButils.execQuery(
    //     `SELECT * FROM dbo.Users WHERE username = '${req.body.username}'`
    //   )
    // )[0];
    // user = user[0];
    console.log(user);

    // check that username exists & the password is correct
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      throw { status: 401, message: "Username or Password incorrect" };
    }

    // Set cookie
    try {
      if (req.session.username) {
        res.status(401).send("User already loged-in");
        return;
      }
    } catch {}
    req.session.username = user.username;

    // return cookie
    res.status(200).send("login succeeded");
  } catch (error) {
    next(error);
  }
});

router.post("/user/logOut", function (req, res) {
  if (req.session.username) {
    req.session.reset(); // reset the session info --> send cookie when  req.session == undefined!!
    res.status(200).send({ success: true, message: "logout succeeded" });
  } else {
    res.status(400).send({ success: false, message: "No user to logout." });
  }
});

module.exports = router;
