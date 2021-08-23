BEGIN;

INSERT INTO employees(id, name, salary)
VALUES
    (1, 'Ryan Ray', 20000),
    (2, 'Joe McMilan', 40000),
    (3, 'John Carter', 50000);

COMMIT;