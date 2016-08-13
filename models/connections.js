const pg = require('pg-promise')({});

const config = {
  host:       'localhost',
  port:       '5432',
  database:   'robotanist',
  user:       'postgres',
  password:   'vaultin10'
};
const db = pg(config);

module.exports= db
