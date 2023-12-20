const express = require('express');
const router = express.Router();

const controllerHome = require('/home/m4rc3l04ugu2t0/dev/estudos-js/curso-js/node+express/A.124-147/a-136/src/controllers/routerPage.js');

router.get('/', controllerHome.routerHome);

// router.post('/', (req, res) => {
//   console.log(req.body);
//   res.send('opaaaaaa');
// });

// router.get('/contact/:id?/:param?', (req, res) => {
//   console.log(req.query, 'query');
//   console.log(req.params);
//   res.send('contact');
// });

module.exports = router;
