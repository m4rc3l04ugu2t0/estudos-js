const express = require('express');
const router = express.Router();
const routeHome = require('./src/controllers/home');

router.get('/', routeHome.home);

module.exports = router;
