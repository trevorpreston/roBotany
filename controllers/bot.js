const cron                  = require('node-cron');
const botModel              = require('../models/bot.js')
const gpio                  = require('rpi-gpio');


let testTime = '*/2 * * * *'
let cycleLength = 5
const oneMin = '* * * * *'

let cycle = cron.schedule( testTime, function(){
  // waterPlant();  //THIS
  console.log('cycle time is: '+ testTime)
  console.log( 'testTime in the bot is ' + testTime )
});

function setBotTimer(req,res,next){
  if (cycle) {
    cycle.destroy();
    console.log('old cycle data destoyed.  Updating cron time to ' + res.cycleTime)
  }
  cycle = cron.schedule( res.cycleTime, function(){
    waterPlant();  //THIS
    console.log( 'Pump triggered at frequency: ' + res.cycleTime )
  });
  next()
}

function waterPlant(){    //THIS
  turnOn();
  setTimeout(turnOff, 7000);
}

function waterPlantNow(req,res,next){    //THIS
  turnOn();
  setTimeout(turnOff, 7000);
 next()
}

function turnOn(){
  gpio.setup(7, gpio.DIR_OUT, write);
  function write(){
    gpio.write(7, true, function(err){
      if(err) throw err;
      console.log('pump is on!')
    })
  }
}

function turnOff(){
  gpio.setup(7, gpio.DIR_OUT, write);
  function write(){
    gpio.write(7, false, function(err){
      if(err) throw err;
      console.log('pump turned off!')
    })
  }
}

module.exports = { waterPlant, turnOn, turnOff, setBotTimer, waterPlantNow }
