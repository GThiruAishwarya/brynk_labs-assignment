// backend/models/Heading.js
const db = require('../db');

exports.saveHeading = (content, callback) => {
  db.run(`DELETE FROM headings`);
  db.run(`INSERT INTO headings (content) VALUES (?)`, [content], function (err) {
    callback(err, { id: this.lastID, content });
  });
};

exports.getHeading = (callback) => {
  db.get(`SELECT content FROM headings ORDER BY id DESC LIMIT 1`, [], (err, row) => {
    callback(err, row);
  });
};
