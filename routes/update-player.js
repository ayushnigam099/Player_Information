const routes= require('../controllers/handler');
const express = require('express');
const router = express.Router();

router.put('/:id', routes.updatePlayer);

module.exports = router;