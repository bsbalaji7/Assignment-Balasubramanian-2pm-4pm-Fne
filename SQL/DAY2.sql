-- use 2pmbatch

-- create table employees (
-- emp_id int primary key auto_increment,
-- emp_name varchar(50) not null,
-- department varchar(60) not null,
-- salary decimal (10,2) check(salary > 0),
-- email varchar(100) unique,
-- hire_date date,
-- status varchar(20) default "active"
-- )


insert into employees (emp_name , department , salary , email , hire_date , status)
values 
('arun', 'IT' , 4000000 , "ar$gmail.com" , '2022-01-10' , 'active'),
('Priya',   'HR',        28000.00, 'priya@company.com',   '2021-03-15', 'active'),
('Rahul',   'Finance',   45000.00, 'rahul@company.com',   '2020-07-20', 'inactive'),
('Sneha',   'IT',        32000.00, 'sneha@company.com',   '2022-11-01', 'active'),
('Karthik', 'Admin',    50000.00, 'karthik@company.com', '2019-05-25', 'active'),
('Anjali',  'HR',        26000.00, 'anjali@company.com',  '2023-02-10', 'active'),
('Vijay',   'Finance',   38000.00, 'vijay@company.com',   '2021-08-18', 'active');

-- select * from employees
-- where department = "Admin";
-- select emp_name  , salary
-- from employees
-- where salary <35000

-- select emp_name , salary
-- from employees
-- where salary between 30000 and 50000

-- select * from employees
-- where department IN ('IT', 'HR')

-- select * from employees
-- where email LIKE '%@company.com'

-- select department , avg(salary) as avg_salary
-- from employees
-- group by department

-- select department, avg(salary) as avg_salary
-- from employees
-- group by department
-- having avg(salary) < 30000;


-- select count(*) as active_employees
-- from employees
-- where status = "inactive"


select sum(salary) as total_salary
from employees;

