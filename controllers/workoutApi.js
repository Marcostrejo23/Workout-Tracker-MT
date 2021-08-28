const router = require('express').Router();
const Workout = require('../models/Workout');


router.post("/workouts/bulk", ({ body }, res) =>{
    Workout.create(body).then(dbWorkout =>{
        res.json(dbWorkout);
    }).catch(err =>{
        res.status(400).json(err);
    });
});


router.post("/workouts", async (req,res) =>{
    try{
        const postWorkout = await Workout.findOneAndUpdate(
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

router.put("/workouts/:id", async (req, res)=>{
    try{
        const workout = await Workout.updateOne(
            {'_id': req.params.id},
            {$push: {exercises:req.body}}
        );
        res.json(exercise);
    }catch(err) {
        res.json(err)
    }
})

router.get("//workouts", async (req,res) =>{
    try{
        const workouts = await Workout.aggregate([{
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

router.get("/Workout/range", async (req,res)=>{
    try {
        const range = await Workout.aggregate([
            { $sort: { day: -1 }},
            {
                $addFields: {
                    totalDuration: { $sum: `$exercises.duration`}
                }
            }
        ]).limit(7)
        res.json(range)
    }catch(err) {
        console.log(err);
        res.json(err);
    };
});

module.exports = router;