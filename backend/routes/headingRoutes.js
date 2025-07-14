// backend/routes/headingRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/headingController');

router.post('/heading', controller.setHeading);
router.get('/heading', controller.getHeading);

module.exports = router;
