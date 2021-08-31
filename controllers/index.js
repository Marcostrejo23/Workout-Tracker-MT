const express = require('express')
const app = express();
const router = express.Router();
const workoutRoute = require("./workoutApi");
const mainRoute = require("./main");

app.use('/api', workoutRoute);
app.use('/', mainRoute);

module.exports = router;