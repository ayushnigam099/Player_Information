const routes= require('../controllers/handler');
const express = require('express');
const router = express.Router();

router.post('/', routes.addPlayer);

module.exports = router;