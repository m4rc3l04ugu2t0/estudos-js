const express = require('express');
const router = express.Router();

const manageHome = require('./controllers/home');

router.get('/', manageHome.home);

// module.exports = router;

console.log(exports, 'breneiwergvs');
