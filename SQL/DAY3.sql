-- use 2pmbatch;

-- select count(*) as Total_employees
-- from employees

-- select sum(salary) as Total_sal
-- from employees\

-- select department , sum(salary) as dept_tot_sala
-- from employees
-- group by department;


-- select min(salary) as min_sal,
-- max(salary) as max_sal
-- from employees


-- select department ,max(salary) as high_sal
-- from employees
-- group by department

-- select department , count(*) as emp
-- from employees
-- group by department


-- select department , count(*) as emp_count 
-- from employees
-- group by department
-- having count(*) > 2;


-- select * from employees
-- order by salary desc;

-- select * from employees
-- order by department asc , salary desc;

-- select department , avg(salary) as avg_salary
-- from employees
-- group by department
-- order by avg_salary desc;


-- select department , avg(salary) as avg_salary
-- from employees
-- group by department
-- order by avg_salary desc
-- limit 3;


-- select emp_name, salary
-- from employees
-- order by salary asc
-- limit 2;

-- select department, avg(salary) as avg_salary 
-- from employees
-- where status = "ACTIVE"
-- group by department 
-- order by avg_salary desc
-- limit 3;


