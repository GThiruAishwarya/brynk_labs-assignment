// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const headingRoutes = require('./routes/headingRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/api', headingRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
