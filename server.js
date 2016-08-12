'use strict'
const express                  = require('express')
const logger                   = require('morgan')
const bodyParser               = require('body-parser');
const methodOverride           = require('method-override');
const path                     = require('path');
const cron                     = require('./models/bot');
var gpio                       = require('rpi-gpio');


const homeRoutes               = require('./routes/home-routes');
const app                      = express();
const PORT                     = process.env.PORT || 3000




// Adding Method override to allow our form to delete
app.use(methodOverride('_method'));

// set up ejs to render the views
app.set('view engine', 'ejs')

// set up logging so that we can see what's happening
app.use( logger('dev') )
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, function(){
  console.log("server up and running on port ", PORT)
})

app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', homeRoutes);


cron


// cron.schedule('* * * * *', function(){
//   console.log('running a task every minute');
// });
