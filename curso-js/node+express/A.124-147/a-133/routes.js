const express = require('express');
const router = express.Router();
const homeController = require('./controllers/home');
const contactController = require('./controllers/contact');

router.get('/', homeController.homePage);
router.post('/', homeController.managePublication);
router.get('/contact', contactController.manageContact);

module.exports = router;
