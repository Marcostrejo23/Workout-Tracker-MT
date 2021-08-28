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
router.post("/workouts", async (req,res) =>{
    try{
        const postWorkout = await db.Workout.findOneAndUpdate(
            { id: req.params.id },
            {
                $inc: {totalDuration: req.body.duration },
                $push: {exercises: req.body},
            }
        );
        res.json(postWorkout);
    }catch (err){
        console.log(err);
        res.json(err)
    }
});
//get workouts 
router.get("/workouts", async (req,res) =>{
    try{
        const workouts = await db.Workout.aggregate([{
            $addFields:{
                totalDuration:{
                    $sum: `$exercises.duration`
                }
            }
        }])
        res.json(workouts);
    }catch (err) {
        console.log(err);
        res.json(err)
    }
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
//previous workouts
router.get("/workouts/range", async (req,res)=>{
    try{
        const workouts = await db.Workout.aggregate([{
            $addFields:{
                totalDuration:{
                    $sum: `$exercise.duration`
                }
            }
        }]).sort({_id:-1}).limit(7)
        res.json(workouts);
    }catch (err) {
        console.log(err);
        res.json(err);
    }
});

module.exports = router;