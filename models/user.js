'use strict'
const db = require('./connections.js')

function setNewActivePlant(req,res,next){
  db.any(`UPDATE users set active_plant=$1 where user_id=1;`, [req.body.newPlant])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

function getCurrentActivePlant(req,res,next){
  db.one(`SELECT * FROM plant_data INNER JOIN users ON (plant_data.plant_id = users.active_plant) WHERE user_id=1;`)
    .then(data => {
      res.active = data.name;
      res.freq = data.frequency;
      console.log( 'cycleTime in the model is ' + cycleTime + 'with a type of ' + (typeof  cycleTime))
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}


module.exports = { setNewActivePlant, getCurrentActivePlant }

