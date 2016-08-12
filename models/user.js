'use strict'
const db = require('./connections.js')

function setNewActivePlant(req,res,next){
  db.any(`UPDATE users SET active_plant=$1 WHERE user_id=1;`, [req.body.newPlant])
    .then(data => {
      res.rows = data;
      console.log('New plant saved. ' + data)
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
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}


module.exports = { setNewActivePlant, getCurrentActivePlant }

