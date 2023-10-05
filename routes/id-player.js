const routes= require('../controllers/handler');
const express = require('express');
const router = express.Router();

router.get('/:id', routes.getIDPlayer);

module.exports = router;