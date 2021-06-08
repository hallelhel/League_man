var express = require("express");
var router = express.Router();
// const DButils = require("../Data_Layer/DButils");
const bcrypt = require("bcryptjs");
const data_utils = require("../Data_Layer/sqlScripts");

async function registerHundler(reqBody, next) {
  try {
    // parameters exists
    // valid parameters
    // username exists

    let users = await data_utils.getFromTable("dbo.Users", ["username"]);
    if (users.find((x) => x.username === reqBody.username))
      return {
        status: 409,
        message: "Username taken",
      };

    //hash the password
    let hash_password = bcrypt.hashSync(
      reqBody.password,
      parseInt(process.env.bcrypt_saltRounds)
    );
    reqBody.password = hash_password;

    // add the new username
    const {
      username,
      firstname,
      lastname,
      country,
      password,
      email,
      picture,
      role,
    } = reqBody;
    let status = await data_utils.insertinto(
      "dbo.Users",
      [
        "username",
        "firstname",
        "lastname",
        "country",
        "password",
        "email",
        "picture",
      ],
      [username, firstname, lastname, country, password, email, picture]
    );
    await data_utils.insertinto(
      "dbo.role",
      ["username", "role"],
      [username, role]
    );
    if (!status) {
      return {
        status: 400,
        message: "user not created, error",
      };
    } else {
      return {
        status: 201,
        message: "user created",
      };
    }
  } catch (error) {
    next(error);
  }
}

async function loginHundler(reqBody, sessionUser, next) {
  try {
    let user = await data_utils.getFromTable(
      "dbo.Users",
      ["*"],
      [`username='${reqBody.username}'`]
    );
    user = user[0];

    // check that username exists & the password is correct
    if (!user || !bcrypt.compareSync(reqBody.password, user.password)) {
      return {
        status: 401,
        message: "Username or Password incorrect",
        session: sessionUser,
      };
      // throw { status: 401, message: "Username or Password incorrect" };
    }

    // Set cookie
    try {
      if (sessionUser) {
        return {
          status: 401,
          message: "User already loged-in",
          session: sessionUser,
        };
        // res.status(401).send("User already loged-in");
        // return;
      }
    } catch {}
    sessionUser = user.username;

    // return cookie
    return {
      status: 200,
      message: "login succeeded",
      session: sessionUser,
    };
    // res.status(200).send("login succeeded");
  } catch (error) {
    next(error);
  }
}

function logoutHundler(sessionUser) {
  if (sessionUser.username) {
    sessionUser.reset(); // reset the session info --> send cookie when  req.session == undefined!!
    return {
      status: 200,
      message: "logout succeeded",
    };
    // res.status(200).send({ success: true, message: "logout succeeded" });
  } else {
    return {
      status: 400,
      message: "No user to logout.",
    };
    // res.status(400).send({ success: false, message: "No user to logout." });
  }
}

exports.logoutHundler = logoutHundler;
exports.loginHundler = loginHundler;
exports.registerHundler = registerHundler;
