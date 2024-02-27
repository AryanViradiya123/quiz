var express = require('express');

var router = express.Router();
const quizzesController = require('../controllers/quizzes')
const GetController = require('../controllers/quizzes')
const UpdateController = require('../controllers/quizzes')
const DeleteController = require('../controllers/quizzes')


router.post('/create', quizzesController.quizzesCreate);
router.get('/find', GetController.quizzesFind);
router.patch('/update', UpdateController.quizzesUpdate);
router.delete('/delete', DeleteController.quizzesDelete);

module.exports = router;