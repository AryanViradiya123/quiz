var express = require('express');

var router = express.Router();
const useranswersController = require('../controllers/useranswers')
const GetController = require('../controllers/useranswers')
const UpdateController = require('../controllers/useranswers')
const DeleteController = require('../controllers/useranswers')


router.post('/create', useranswersController.useranswersCreate);
router.get('/find', GetController.useranswersFind);
router.patch('/update', UpdateController.useranswersUpdate);
router.delete('/delete', DeleteController.useranswersDelete);
 
module.exports = router;