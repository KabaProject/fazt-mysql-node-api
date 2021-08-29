//IMPORT
const express = require('express');
const router = express.Router();

const { EmployeeController } = require('../Controllers');

// ROUTES
router
    .get('', EmployeeController.index)
    .post('/add', EmployeeController.add)
    .get('/:id', EmployeeController.record)
    .put('/:id', EmployeeController.edit)

// EXPORT
module.exports = router;