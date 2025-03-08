const express = require('express');
const router = express.Router();
const ApiController = require('../controller/ApiController');



router.get('/teste', ApiController.testeTwo);
router.post('/cadastro', ApiController.cadastro);
router.get('/produto', ApiController.product);
router.delete('/produto/:id', ApiController.deleteProd);


module.exports = router;