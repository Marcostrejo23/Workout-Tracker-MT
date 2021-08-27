const express = require('express')
const app = express();
const router = express.Router();
const workoutRoute = require("./workoutApi");
const homeRoute = require("./home");

app.use('/', workoutRoute);
app.use('/api', homeRoute);

module.exports = router;