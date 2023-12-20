const express = require('express');
const router = express.Router();
const manageHome = require('/home/m4rc3l0/dev/estudos-js/curso-js/node+express/A.124-147/a-136/src/controllers/home.js');

router.get('/', manageHome.home);

module.exports = router;
