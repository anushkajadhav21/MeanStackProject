var express = require('express');
var router = express.Router();
const employeeController = require('./Employee.controller')

router.get('/', employeeController.getEmployee);

router.post('/', employeeController.createEmployee);
//router.get('/linkcode',userController.findById)
router.get('/:id',employeeController.findById)  //Search

router.delete('/:id', employeeController.deleteEmployee);
router.put('/:id',employeeController.updateByid)

module.exports = router;
