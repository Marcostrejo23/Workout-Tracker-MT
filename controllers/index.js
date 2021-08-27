const router =require('express').Router();
const workoutApi = require ('./workoutApi');
const path = require('path');

router.use('/api', workoutApi);

router.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, '../publi/index.html'))
});
router.get('/stats', (req,res =>{
    res.sendFile(pah.join(_dirname, '../public/stats.html'))
}));
router.get('/exercise', (req,res)=>{
    res.sendFile(path.join(_dirname, '../public/exercise.html'))
});


module.exports = router;