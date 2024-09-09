const express = require('express');
const { getInsights } = require('../controllers/insightsController');

const router = express.Router();

router.post('/insights', getInsights);

module.exports = router;
