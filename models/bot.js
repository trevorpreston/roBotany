// var gpio = require('rpi-gpio');

const cron                     = require('node-cron');

var cycleTime = '* * * * *'

cron.schedule( cycleTime, function(){
  console.log('running a task every minute');
});


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


// // function turnOn(req,res,next){
// //   console.log("ROBOT ON!!!!!!");
// //   next()
// // }


// // function turnOff(req,res,next){
// //   console.log("ROBOT OFF!!");
// //   next()
// // }

// module.exports = { turnOn, turnOff }

// module.exports = {cron}
