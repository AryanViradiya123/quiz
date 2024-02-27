var express = require('express');

var router = express.Router();
const userquizzesController = require('../controllers/userquizzes')
const GetController = require('../controllers/userquizzes')
const UpdateController = require('../controllers/userquizzes')
const DeleteController = require('../controllers/userquizzes')


router.post('/create', userquizzesController.userquizzesCreate);
router.get('/find', GetController.userquizzesFind);
router.patch('/update', UpdateController.userquizzesUpdate);
router.delete('/delete', DeleteController.userquizzesDelete);
 
module.exports = router;    