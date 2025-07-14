// backend/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./headings.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS headings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL
    )
  `);
});

module.exports = db;
