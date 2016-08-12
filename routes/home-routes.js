
console.log("present!")
const router                      = require('express').Router();
const { setCycleTime }            = require('../models/bot')
const { getAllPlants }            = require('../models/plants')
const { setBotTimer, turnOn, turnOff }             = require('../controllers/bot')
const { setNewActivePlant, getCurrentActivePlant } = require('../models/user.js')



router.get('/', (req,res)=>{
  res.render('index')
});

router.get('/dash', getAllPlants, getCurrentActivePlant, (req,res)=>{
  res.render('dash', {plants: res.allplants, activePlant: res.active, waterFreq: res.freq})
});

router.get('/plants', getAllPlants, (req,res)=>{
  res.send(res.allplants)
});

router.get('/active', (req,res)=>{
  res.redirect('/dash')
})

router.put('/active', setNewActivePlant, setCycleTime, setBotTimer, (req,res)=>{
  res.redirect('/dash')
})


router.get('/on', turnOn, function(req,res) {
  res.redirect('/');
});

router.get('/off', turnOff, function(req,res) {
  res.redirect('/')
});


module.exports = router;
