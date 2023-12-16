const express = require('express');
const router = express.Router();

const manageHome = require('./controllers/controllerHome');

console.log(manageHome);

router.get('/', manageHome.home);

module.exports = router;
