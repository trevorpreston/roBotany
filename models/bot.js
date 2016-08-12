const cron                   = require('node-cron');
const db                     = require('./connections.js')



function setCycleTime(req,res,next){
  db.one(`SELECT * FROM plant_data INNER JOIN users ON (plant_data.plant_id = users.active_plant) WHERE user_id=1;`)
    .then(data => {
      res.cycleTime = '*/' + data.frequency.toString() + ' * ' + '* ' + '* ' + '*'
      next()
    })
    .catch( error=> {
      console.log('Error ', error)
    })
}





module.exports = { setCycleTime }
