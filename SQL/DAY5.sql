-- a window fuctions performs a calculations across rows related to current row without colapsing row
-- group by will reduse the rows
-- window funtion will not reduse the row 

-- use 2pmclass_db

-- select emp_name , dept_id , salary ,
-- row_number() over (order by salary desc) as row_num
-- from employees

-- select emp_name , dept_id , salary,
-- row_number() over (partition by dept_id order by salary desc ) as dept_rank
-- from employees


-- select emp_name, salary,
-- rank() over(order by salary desc) as rank_salary
-- from employees


-- select emp_name , dept_id , salary , 
-- avg(salary) over (partition by dept_id) as avg_dept_salary
-- from employees


-- select emp_name , hire_date , salary,
-- sum(salary) over (order by hire_date) as running_total
-- from employees 


-- cte is a tempory named result set used in the query (common table expersion)

-- with avg_salary as (
-- select avg(salary) as avg_salaaa
-- from employees
-- )

-- select emp_name , salary
-- from employees
-- where salary > (select avg_salaaa from avg_salary)



-- with ranked_emps as (
-- select emp_name , dept_id , salary,
-- row_number() over (partition by dept_id order by salary desc) as rn
-- from employees
-- )

-- select emp_name , dept_id , salary 
-- from ranked_emps
-- where rn <= 2;


with dept_avg as (
select dept_id , avg(salary) as avg_salary
from employees
group by dept_id 
),
high_paid as (
select e.emp_name , e.salary , d.avg_salary 
from employees e 
join dept_avg d on e.dept_id = d.dept_id
where e.salary > d.avg_salary 
)
select * from high_paid

