#!/usr/bin/env node

// IMPs - ExtLib
import sqlite3 from 'sqlite3';

// DATA
const SQLite3 = sqlite3.verbose();
const file = `${import.meta.dirname}/urls.db`;

// FUNC
const func = err => (
  err
    ? console.error(err)
    : console.log('DB init - [urls]')
);

// MAIN
const createDB = () => new SQLite3.Database(file, func);

// EXPs
export default createDB;
