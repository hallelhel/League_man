var express = require("express");
const app = express()
app.listen(3001)

// module.exports = app

var router = express.Router();

const auth = require("../Domain_Layer/auth");

router.post("/register", async (req, res, next) => {
  const result = await auth.registerHundler(req, next);
  res.status(result.status).send(result.message);
});

router.post("/login", async (req, res, next) => {
  const result = await auth.loginHundler(req, next);
  res.status(result.status).send(result.message);
});

router.post("/user/logOut", async (req, res) => {
  const result = await auth.logoutHundler(req);
  res.status(result.status).send(result.message);
});

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})

module.exports = router;
