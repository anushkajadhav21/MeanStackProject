var express = require('express');
var router = express.Router();
const userController = require('./user.controller')


router.post('/register', userController.createUser);
router.post('/login',userController.login) 

module.exports = router;