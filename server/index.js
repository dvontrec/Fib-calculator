const keys = require('./keys');

// Express app setup
const experss = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = experss();
app.use(cors());
app.use(bodyParser.json());

// postgress client setup
const { Pool } = require('pg');

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on('error', () => console.log('Lost PG connection'));

// create table for values
pgClient
  .query('CREATE TABLE IF NOT EXIST VAUES (number INT)')
  .catch(error => console.log(error));
