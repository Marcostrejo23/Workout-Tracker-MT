const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./controllers");

const PORT = process.env.PORT || 3000;

// const workoutRoutes = require("./controllers");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use("/", routes);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false
    }
);
app.listen(PORT, () =>{
    console.log(`App is running on port ${PORT}`);
});