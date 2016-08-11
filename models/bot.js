// const gpio = require('rpi-gpio');

const cron                   = require('node-cron');
const db                     = require('./connections.js')

let cycleTime = '*/2 * * * *'
let cycleLength = 5
var oneMin = '* * * * *'

function setCronCycle(){
  cron.schedule( cycleTime, function(){
    console.log( 'cycleTime in the bot is ' + cycleTime )
  });
}

function setCycleTime(req,res,next){
  db.one(`SELECT * FROM plant_data INNER JOIN users ON (plant_data.plant_id = users.active_plant) WHERE user_id=1;`)
    .then(data => {
      cycleTime = '*/' + data.frequency.toString() + ' * ' + '* ' + '* ' + '*';
      setCronCycle();
      console.log()
      next()
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

// function waterPlant()

// function turnOn(req,res,next){
//   gpio.setup(7, gpio.DIR_OUT, write);

//   function write(){
//     gpio.write(7, true, function(err){
//       if(err) throw err;
//       console.log('pump is on!')
//     })
//   }
//   next()
// }


// function turnOff(req,res,next){
//   gpio.setup(7, gpio.DIR_OUT, write);

//   function write(){
//     gpio.write(7, false, function(err){
//       if(err) throw err;
//       console.log('pump turned off!')
//     })
//   }
//   next()
// }

// function turnOn(req,res,next){
//   gpio.setup(7, gpio.DIR_OUT, write);

//   function write(){
//     gpio.write(7, true, function(err){
//       if(err) throw err;
//       console.log('pump is on!')
//     })
//   }
//   next()
// }


// function turnOff(req,res,next){
//   gpio.setup(7, gpio.DIR_OUT, write);

//   function write(){
//     gpio.write(7, false, function(err){
//       if(err) throw err;
//       console.log('pump turned off!')
//     })
//   }
//   next()
// }




module.exports = { setCycleTime }
// module.exports = { turnOn, turnOff }

// module.exports = {cron}
