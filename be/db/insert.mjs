#!/usr/bin/env node

// IMPs - StdLib
import { readFileSync } from 'fs';
// IMPs - local
import createDB from './createDB.mjs';

// DATA
const db = createDB();
const sql = readFileSync('db/sql/insert.sql').toString();

// MAIN
const insert = url => db.run(sql, [url]);

// EXPs
export default insert;
