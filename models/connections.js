const pg = require('pg-promise')({});

//for bot
// const config = {
//   host:       'localhost',
//   port:       '5432',
//   database:   'robotanist',
//   user:       'postgres',
//   password:   'vaultin10'
// };

//for testing on laptop
const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   'robotanist',
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};


const db = pg(config);

module.exports= db


