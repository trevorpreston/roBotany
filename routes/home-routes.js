
console.log("present!")
const { turnOn, turnOff } = require('../models/bot')
const router = require('express').Router();

router.get('/',  function(req,res) {
  res.render('index')
});

router.get('/on', turnOn, function(req,res) {
  res.redirect('/');
});

router.get('/off', turnOff, function(req,res) {
  res.redirect('/')
});


module.exports = router;
