-- use 2pmclass_db;

-- select emp_name , salary 
-- from employees
-- where salary > (
-- select avg(salary)
-- from employees
-- )


-- select emp_name
-- from employees
-- where salary =(
-- select max(salary)
-- from employees
-- )


-- select emp_name 
-- from employees
-- where dept_id in (
-- select dept_id
-- from department
-- where loaction = 'chennai'
-- )


-- SELECT emp_name, salary
-- FROM employees e
-- WHERE salary > (
--     SELECT AVG(salary)
--     FROM employees
--     WHERE dept_id = e.dept_id
-- );


INSERT INTO employees 
(emp_name, dept_id, salary, email, hire_date, status)
VALUES
('Arun Kumar', 1, 35000, 'arun.kumar@gmail.com', '2023-01-10', 'active'),
('Priya Sharma', 2, 42000, 'priya.sharma@gmail.com', '2022-11-15', 'active'),
('Vikram Singh', 1, 38000, 'vikram.singh@gmail.com', '2023-03-05', 'active'),
('Sneha Reddy', 3, 45000, 'sneha.reddy@gmail.com', '2021-09-20', 'active'),
('Rahul Das', 2, 30000, 'rahul.das@gmail.com', '2023-07-01', 'inactive'),
('Meena Iyer', 3, 47000, 'meena.iyer@gmail.com', '2020-12-11', 'active'),
('Karthik Raj', 1, 36000, 'karthik.raj@gmail.com', '2022-05-18', 'active'),
('Divya Patel', 2, 41000, 'divya.patel@gmail.com', '2023-02-22', 'active'),
('Suresh Babu', 3, 52000, 'suresh.babu@gmail.com', '2019-08-30', 'active'),
('Anita Nair', 1, 34000, 'anita.nair@gmail.com', '2024-01-12', 'active'),
('Rohit Verma', 2, 39000, 'rohit.verma@gmail.com', '2022-06-10', 'inactive'),
('Lakshmi Devi', 3, 48000, 'lakshmi.devi@gmail.com', '2021-04-25', 'active'),
('Manoj Gupta', 1, 33000, 'manoj.gupta@gmail.com', '2023-09-14', 'active'),
('Pooja Jain', 2, 40500, 'pooja.jain@gmail.com', '2022-10-08', 'active'),
('Ajay Menon', 3, 55000, 'ajay.menon@gmail.com', '2018-03-19', 'active');

-- select emp_name , salary 
-- from employees 
-- where salary > (select avg(salary)from employees)



select emp_name , salary
from employees e
where salary > (
select avg(salary)
from employees
where dept_id = e.dept_id 
)
