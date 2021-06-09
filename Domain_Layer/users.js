var express = require("express");
var router = express.Router();
const users_utils = require("./utils/users_utils");
const { send } = require("process");
const data_utils = require("../Data_Layer/sqlScripts");

/**
 * Authenticate all incoming requests by middleware
 */
// async function authUserHundler(req, next) {
//   if (req.session && req.session.username) {
//     //clieant verification
//     await data_utils
//       .getFromTable("dbo.Users", ["username"])
//       .then((users) => {
//         if (users.find((x) => x.username === req.session.username)) {
//           req.username = req.session.username;
//           next();
//         }
//       })
//       .catch((err) => next(err));
//   } else {
//     return {
//       status: 401,
//       message: "Athentication failed",
//     };
//   }
// }

async function verificationUser(req, next) {
  await data_utils
    .getFromTable("dbo.Users", ["username"])
    .then((users) => {
      if (users.find((x) => x.username === req.session.username)) {
        req.username = req.session.username;
        next();
      }
    })
    .catch((err) => next(err));
}

/**
 * This path gets return all the players in db
 */
async function usersDetaileHundler(sessionUser, next) {
  if (sessionUser != "admin") {
    return {
      status: 400,
      message: "User Aouthorized",
    };
  }
  //return all users in system details
  try {
    let usersDetails = {};
    usersDetails = await users_utils.getAllUsers();
    return {
      status: 200,
      message: usersDetails,
    };
  } catch (error) {
    next(error);
  }
}

async function userDetailHundler(sessionUser, next) {
  //return the user details
  try {
    const username = sessionUser;
    let usersDetails = {};
    usersDetails = await users_utils.getUserDetails(username);
    return {
      status: 200,
      message: usersDetails,
    };
  } catch (error) {
    next(error);
  }
}

// exports.authUserHundler = authUserHundler;
exports.usersDetaileHundler = usersDetaileHundler;
exports.userDetailHundler = userDetailHundler;
exports.verificationUser = verificationUser;
