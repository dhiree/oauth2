const express = require('express');
const { getPages } = require('../controllers/pagesController');

const router = express.Router();

router.post('/pages', getPages);

module.exports = router;
