var express = require('express');

var router = express.Router();
const answersController = require('../controllers/answers')
const GetController = require('../controllers/answers')
const UpdateController = require('../controllers/answers')
const DeleteController = require('../controllers/answers')


router.post('/create', answersController.answersCreate);
router.get('/find', GetController.answersFind);
router.patch('/update', UpdateController.answersUpdate);
router.delete('/delete', DeleteController.answersDelete);

module.exports = router;