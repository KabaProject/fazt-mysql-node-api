USE company;

DROP PROCEDURE IF EXISTS getEmployees;
DROP PROCEDURE IF EXISTS getEmployee;
DROP PROCEDURE IF EXISTS addEmployee;
DROP PROCEDURE IF EXISTS editEmployee;

DELIMITER //

CREATE PROCEDURE getEmployees ()
BEGIN
    SELECT * FROM employees;
END //

CREATE PROCEDURE getEmployee (
    IN _id INT(11)
)
BEGIN
    SELECT * FROM employees WHERE id = _id;
END //

CREATE PROCEDURE addEmployee (
    IN _name VARCHAR(45),
    IN _salary INT(11)
)
BEGIN
    INSERT INTO employees (name, salary)
    VALUES (_name, _salary);

    SELECT * FROM employees WHERE id = LAST_INSERT_ID();
END //

CREATE PROCEDURE editEmployee (
    IN _id INT(11),
    IN _name VARCHAR(45),
    IN _salary INT(11)
)
BEGIN
    UPDATE employees
    SET
        name = _name,
        salary = _salary
    WHERE
        id = _id;

    SELECT * FROM employees WHERE id = _id;
END //

DELIMITER ;