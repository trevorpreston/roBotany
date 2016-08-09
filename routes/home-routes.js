
console.log("present!")
// const { turnOn, turnOff } = require('../models/bot')
const router = require('express').Router();
const { getAllPlantNames } = require('../models/plants.js')

router.get('/',  (req,res)=>{
  res.render('index')
});

router.get('/plants', getAllPlantNames, (req,res)=>{
  res.send(res.rows)
});
// router.get('/on', turnOn, function(req,res) {
//   res.redirect('/');
// });

// router.get('/off', turnOff, function(req,res) {
//   res.redirect('/')
// });


module.exports = router;
