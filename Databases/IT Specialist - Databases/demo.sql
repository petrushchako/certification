CREATE DATABASE SAP;
GO;

USE SAP;
GO;

CREATE TABLE employees (
    ID varchar(10),
    first_name varchar(20),
    last_name varchar(20),
    title varchar(20),
    t_level decimal(2,1),
    starting_date date
);

INSERT INTO employees (ID, first_name, last_name, title, t_level, starting_date) VALUES ('I00001', 'Alex', 'Petrushchak', 'DevOps Engineer', 2.3, '2021/03/22');
INSERT INTO employees (ID, first_name, last_name, title, t_level, starting_date) VALUES ('I00001', 'Kristof', 'Groziev', 'Lead Developer', 3.2, '2019/09/07');
INSERT INTO employees (ID, first_name, last_name, title, t_level, starting_date) VALUES ('I00001', 'Vlad', 'Kopernik', 'UI Developer', 3.1, '2022/03/10');
INSERT INTO employees (ID, first_name, last_name, title, t_level, starting_date) VALUES ('I00001', 'Karina', 'Safonova', 'Product Owner', 4.1, '2023/10/01');
SELECT * FROM employees;

UPDATE employees SET ID = 'I00002' WHERE first_name = 'Kristof' AND last_name = 'Groziev';
UPDATE employees SET ID = 'I00003' WHERE title = 'UI Developer';
UPDATE employees SET ID = 'I00004' WHERE t_level > 4.0;
SELECT * FROM employees;

DELETE FROM employees WHERE ID = 'I00001';
SELECT * FROM employees;