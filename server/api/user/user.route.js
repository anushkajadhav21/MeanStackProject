var express = require('express');
var router = express.Router();
const userController = require('./user.controller')

router.get('/', userController.getUsers);

router.post('/', userController.createUser);
//router.get('/linkcode',userController.findById)
router.get('/:id',userController.findById)

router.delete('/:id', userController.findById);
router.put('/:id',userController.findById)

module.exports = router;
