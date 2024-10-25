#!/usr/bin/env node

// IMPs - StdLib
import { readFileSync } from 'fs';
// IMPs - local
import createDB from './createDB.mjs';

// DATA
const db = createDB();
const sql = readFileSync('sql/makeTable.sql').toString();

// FUNC
const cb = err => {
  if (err)
    throw new Error(err.message);
};

// MAIN
const makeTable = () => db.exec(sql, cb);

makeTable();
