
console.log("present!")
const router                                       = require('express').Router();
const { setCycleTime }                             = require('../models/bot')
const { getAllPlants }                             = require('../models/plants')
const { setStatusTimer, calcNextWater }            = require('../models/status')
const { setBotTimer, waterPlantNow }             = require('../controllers/bot')
const { setNewActivePlant, getCurrentActivePlant } = require('../models/user.js')



router.get('/', getAllPlants, getCurrentActivePlant, (req,res)=>{
  res.render('index', {plants: res.allplants, activePlant: res.active, waterFreq: res.freq, status: 0})
});


router.get('/dash', getAllPlants, getCurrentActivePlant, (req,res)=>{
  res.render('dash', {plants: res.allplants, activePlant: res.active, waterFreq: res.freq})
});

router.get('/plants', getAllPlants, (req,res)=>{
  res.send(res.allplants)
});

router.get('/active', (req,res)=>{
  res.redirect('/')
})

router.put('/active', setNewActivePlant, setCycleTime, setBotTimer, setStatusTimer, calcNextWater, getAllPlants, getCurrentActivePlant, (req,res)=>{
  res.render('index', {plants: res.allplants, activePlant: res.active, waterFreq: res.freq, status: res.nextWater})
})


router.get('/on', waterPlantNow, setCycleTime, setBotTimer, setStatusTimer, calcNextWater, getAllPlants, getCurrentActivePlant, function(req,res) {
  res.render('index', {plants: res.allplants, activePlant: res.active, waterFreq: res.freq, status: res.nextWater})
});




module.exports = router;
