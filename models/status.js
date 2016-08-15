//this is the controller for the bot status window on the front page

const cron                  = require('node-cron');
const botModel              = require('../models/bot.js')
// const gpio                  = require('rpi-gpio');

let today
let nextWateringDate
let adjustedMins
let adjustedDays
let testTime = '*/2 * * * *'
let cycleLength = 5
const oneMin = '* * * * *'

let statusCycle = cron.schedule( testTime, function(){
  // waterPlant();  //THIS
  console.log('cycle time is: ' + testTime)
  console.log('testTime in the bot is ' + testTime )
});

function setStatusTimer(req,res,next){
  if (statusCycle) {
    statusCycle.destroy();
    console.log('old statusCycle data destoyed.  Updating statusCycle time to ' + res.cycleTime)
  }
  statusCycle = cron.schedule( res.cycleTime, function(){
    console.log( 'status banner updated on this frequency: ' + res.cycleTime )
  });

  today = (new Date());
  nextWateringDate = (new Date());
  console.log('today is ' + today)
  next()
}

function calcNextWater(req,res,next){
  adjustedMins = parseInt(res.cycleTime.split(' ')[0].split('/')[1])
  adjustedDays = res.cycleTime.split(' ')[2]
  today.getDate();

  let todaysMins = today.getMinutes();
  nextWateringDate.setMinutes(todaysMins + adjustedMins)
  nextWateringDate.setSeconds(0)
  res.nextWater = nextWateringDate
  console.log('Mins shifted by ' + adjustedMins);
  console.log('The plant will be watered next on ' + nextWateringDate)
  next()
}


module.exports = { setStatusTimer, calcNextWater }
