const express = require('express')
const router = express.Router();
const workoutRoute = require("./workoutApi");
const mainRoute = require("./main");

router.use('/api', workoutRoute);
router.use('/', mainRoute);

module.exports = router;