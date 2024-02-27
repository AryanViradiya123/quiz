var express = require('express');

var router = express.Router();
const questionController = require('../controllers/question')
const GetController = require('../controllers/question')
const UpdateController = require('../controllers/question')
const DeleteController = require('../controllers/question')


router.post('/create', questionController.questionCreate);
router.get('/find', GetController.questionFind);
router.patch('/update', UpdateController.questionUpdate);
router.delete('/delete', DeleteController.questionDelete);

module.exports = router;