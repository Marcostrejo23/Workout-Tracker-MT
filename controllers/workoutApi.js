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

//get workouts 
router.get("/workouts", async (req,res) =>{
    try{
        const finalWorkout = await db.Workout.aggregate([
            {$addFields: {totalDuration: {$sum:`$exercises.duration`}
        }}]);
            res.json(finalWorkout);
    }catch(err) {
        res.json(err);
    };
});

//update workout 

router.put("/workouts/:id", async (req, res)=>{
    try{
        const workout = await db.Workout.updateOne(
            {'_id': req.params.id},
            {$push: {exercises:req.body}}
        );
        res.json(exercise);
    }catch(err) {
        res.json(err)
    }
})