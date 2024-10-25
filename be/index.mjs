#!/usr/bin/env node

// IMPs - ExtLib
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
// IMPs - local
import createDB from './db/createDB.mjs';
import insert from './db/insert.mjs';
import query from './db/query.mjs';

// DATA
const port = 9000 || process.env.PORT;
const func = () => console.log(`listening @ http://localhost:${port}`);

// INIT
const app = express();

// CONF
app.use(helmet());
app.use(express.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');

// MAIN
app.post('/', ({ body: { url }}, res) => {

  insert(url);
  
  const db = createDB();
  const q = `SELECT guid FROM urls WHERE url = ?;`;

  db.get(q, [url], (err, row) => (
    err
      ? res.send(err)
      : res.send(row)
  ));
});

app.get(/^\/[a-z]$/, ({ originalUrl }, res) => {

  const guid = originalUrl.substr(1);

  const db = createDB();
  const q = `SELECT url, date_expire FROM urls WHERE guid = ?;`;

  db.get(q, [guid], (err, row) => (
    err
      ? res.send(err)
      : res.send(row)
  ));
});

app.listen(port, func);
