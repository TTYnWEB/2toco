#!/usr/bin/env node

// IMPs - local
import createDB from './createDB.mjs';

// DATA
const db = createDB();
const q = `SELECT guid FROM urls WHERE url = '?';`;

// FUNC
const cb = (err, row) => {
  if (err)
    throw new Error(err)
  return row;
};

// MAIN
const getGUID = url => db.get(q, [url], cb);

// EXPs
export default getGUID;
