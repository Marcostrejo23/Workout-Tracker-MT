const express = require('express')
const app = express();
const router = express.Router();
const workoutRoute = require("./workoutApi");
const mainRoute = require("./main");

app.use('/', workoutRoute);
app.use('/api', mainRoute);

module.exports = router;