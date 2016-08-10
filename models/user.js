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
  db.one(`SELECT active_plant FROM users WHERE user_id=1;`)
    .then(data => {
      res.active = data.active_plant;
      next();
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}

module.exports = { setNewActivePlant, getCurrentActivePlant }


// module.exports = { activePlant }
