'use strict'
const db = require('./connections.js')

function getAllPlants(req,res,next){
  db.any(`SELECT * FROM plant_data;`)
    .then(data=>{
      res.allplants = data;
      next();
    })
    .catch(error=>{
      console.log('Error ', error)
    })
}

module.exports = { getAllPlants }
