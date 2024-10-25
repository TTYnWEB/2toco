#!/usr/bin/env node

// IMPs - local
import createDB from './createDB.mjs';

// DATA
const db = createDB();
const q = 'SELECT url, date_expire FROM urls WHERE guid = ?;';

// FUNC
const cb = (err, row) => {
  if (err)
    throw new Error(err)
  return row;
};

// MAIN
const query = guid => db.get(q, [guid], cb);

// EXPs
export default query;
