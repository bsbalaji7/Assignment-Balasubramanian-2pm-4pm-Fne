-- create database 2pmclass_db;
-- use 2pmclass_db;


-- create table department (
-- dept_id int primary key auto_increment,
-- dept_name varchar(50) unique not null,
-- loaction varchar(50)
-- )


-- create table employees(
-- emp_id int primary key auto_increment,
-- emp_name varchar(50) not null,
-- email varchar(100) unique,
-- phone varchar(15),
-- salary decimal(10,2) check (salary >2),
-- hire_date date,
-- dept_id int,
-- status enum("active","inactive") default "active",
-- foreign key (dept_id) references department (dept_id)
-- )





-- INSERT INTO department (dept_name, loaction) VALUES
-- ('HR','Chennai'),
-- ('IT','Bangalore'),
-- ('Finance','Mumbai'),
-- ('Sales','Delhi');


-- INSERT INTO employees (emp_name, email, phone, salary, hire_date, dept_id)
-- VALUES
-- ('Arun','arun@company.com','9876543210',30000,'2022-01-10',2),
-- ('Priya','priya@company.com','9876543211',28000,'2021-03-15',1),
-- ('Rahul','rahul@company.com','9876543212',45000,'2020-07-20',2),
-- ('Sneha','sneha@company.com','9876543213',32000,'2022-11-01',3);

-- CREATE TABLE roles (
--     role_id INT PRIMARY KEY AUTO_INCREMENT,
--     role_name VARCHAR(50) UNIQUE NOT NULL
-- );


-- CREATE TABLE employee_roles (
--     emp_id INT,
--     role_id INT,
--     PRIMARY KEY (emp_id, role_id),
--     FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
--     FOREIGN KEY (role_id) REFERENCES roles(role_id)
-- );


-- CREATE TABLE payroll (
--     payroll_id INT PRIMARY KEY AUTO_INCREMENT,
--     emp_id INT,
--     basic_salary DECIMAL(10,2),
--     bonus DECIMAL(10,2),
--     deductions DECIMAL(10,2),
--     pay_date DATE,
--     FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
-- );

-- CREATE TABLE attendance (
--     attendance_id INT PRIMARY KEY AUTO_INCREMENT,
--     emp_id INT,
--     attendance_date DATE,
--     status ENUM('Present','Absent','Leave'),
--     FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
-- );


-- INSERT INTO roles (role_name) VALUES
-- ('Developer'),
-- ('HR Manager'),
-- ('Accountant'),
-- ('Sales Executive');


INSERT INTO employee_roles VALUES
(1,1),
(2,2),
(3,1),
(4,3);


INSERT INTO payroll (emp_id, basic_salary, bonus, deductions, pay_date)
VALUES
(1,30000,5000,2000,'2024-01-31'),
(2,28000,3000,1500,'2024-01-31'),
(3,45000,7000,3000,'2024-01-31');