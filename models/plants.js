'use string'

const db = require('./connections.js')

function getAllPlantNames(req,res,next){
  db.any(`SELECT name FROM plant_data;`)
    .then(data=>{
      console.log('THIS IS DATA: '+data)
      res.rows = data;
      next();
    })
    .catch(error=>{
      console.log('Error ', error)
    })
}

module.exports = { getAllPlantNames }
