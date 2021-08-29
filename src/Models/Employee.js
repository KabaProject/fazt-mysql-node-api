// IMPORTS
const { db } = require('../Config/');

/// MODEL
class EmployeeModel {

    getList(){
        return new Promise((resolve, reject) => {
            const query = 'CALL getEmployees();';
            db.query(query, (err, rows, fields) => {
                if(err) reject(err);
                resolve(rows[0]);
            });
        });
    }

    get(id){
        return new Promise((resolve, reject) => {
            const query = 'CALL getEmployee(?);';
            db.query(query, [id], (err, rows, fields) => {
                if(err) reject(err);
                resolve(rows[0][0]);
            });
        });
    }

    add(name, salary){
        return new Promise((resolve, reject) => {
            const query = `CALL addEmployee(?, ?);`;
            db.query(query, [name, salary], (err, rows, fields) => {
                if(err) reject(err);
                resolve(rows[0]);
            });
        });
    }

    update(id, name, salary){
        return new Promise((resolve, reject) => {
            const query = 'CALL editEmployee(?, ?, ?);';
            db.query(query, [id, name, salary], (err, rows, fields) => {
                if(err) reject(err);
                resolve(rows[0]);
            });
        });
    }
}

module.exports = EmployeeModel;