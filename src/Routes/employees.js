//IMPORT
const express = require('express');
const router = express.Router();

const { db } = require('../Config/');

// ROUTES
router
    .get('', (req, res) => {
        const query = 'CALL getEmployees();';
        db.query(query, (err, rows, fields) => {
            if(!err){
                res.json(rows[0]);
            } else {
                console.error(err);
            }
        });
    })
    .post('', (req, res) => {
        const { name, salary } = req.body;
        const query = `CALL addEmployee(?, ?);`;
        db.query(query, [name, salary], (err, rows, fields) => {
            if(!err){
                res.json({
                    success: true,
                    data: rows[0]
                })
            } else {
                console.error(err);
            }
        })
    })
    .get('/:id', (req, res) => {
        const { id } = req.params;
        const query = 'CALL getEmployee(?);';
        db.query(query, [id], (err, rows, fields) => {
            if(!err) {
                res.json(rows[0]);
            } else {
                console.error(err);
            }
        })
    })
    .put('/:id', (req, res) => {
        const { id, name, salary } = req.body;
        const query = 'CALL editEmployee(?, ?, ?);';
        db.query(query, [id, name, salary], (err, rows, fields) => {
            if(!err){
                res.json({
                    success: true,
                    data: rows[0]
                })
            } else {
                console.log(err);
                res.json({
                    success: false,
                    msg: 'The values are not valid'
                })
            }
        });
    })

// EXPORT
module.exports = router;