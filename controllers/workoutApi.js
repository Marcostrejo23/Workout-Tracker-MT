const router = require('express').Router();
const db = require('../models');

//post many workouts
router.post("/workouts/bulk", ({ body }, res) =>{
    db.Workout.create(body).then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err =>{
        res.json(err);
    });
});

//post a workout
router.post ("/workouts", ({ body }, res) =>{
    db.Workout.create(body).then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err =>{
        res.json(err);
    });
});

//
