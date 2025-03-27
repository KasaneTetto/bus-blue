const express = require('express');
const sql = require('better-sqlite3');
const { api_key, api_en } = require('./src/function.js');

const app = express();
