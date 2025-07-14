// backend/controllers/headingController.js
const Heading = require('../models/Heading');

exports.setHeading = (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: "Heading content is required" });

  Heading.saveHeading(content, (err, result) => {
    if (err) return res.status(500).json({ error: "Failed to save heading" });
    res.status(201).json(result);
  });
};

exports.getHeading = (req, res) => {
  Heading.getHeading((err, row) => {
    if (err) return res.status(500).json({ error: "Failed to fetch heading" });
    res.json(row || { content: "" });
  });
};
