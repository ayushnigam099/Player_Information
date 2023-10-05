const routes= require('../controllers/handler');
const express = require('express');
const router = express.Router();

router.get('/:name', routes.getPlayer);

module.exports = router;