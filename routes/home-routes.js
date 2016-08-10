
console.log("present!")
// const { turnOn, turnOff } = require('../models/bot')
const router = require('express').Router();
const { getAllPlants } = require('../models/plants.js')
const { setNewActivePlant, getCurrentActivePlant } = require('../models/user.js')



router.get('/', (req,res)=>{
  res.render('index')
});

router.get('/dash', getAllPlants, getCurrentActivePlant, (req,res)=>{
  res.render('dash', {plants: res.allplants, activePlant: res.active})
});

router.get('/plants', getAllPlants, (req,res)=>{
  res.send(res.allplants)
});

router.get('/active', (req,res)=>{
  res.redirect('/dash')
})

router.put('/active', setNewActivePlant, (req,res)=>{
  res.redirect('/dash')
})


// router.get('/on', turnOn, function(req,res) {
//   res.redirect('/');
// });

// router.get('/off', turnOff, function(req,res) {
//   res.redirect('/')
// });


module.exports = router;
