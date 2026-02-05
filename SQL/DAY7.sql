-- defination : triggers is a block of code 

-- types of triggers 
-- insert , update, delete 

-- before trigger will run before the data changes, used for validation, can modify
-- after trigger runs after the data changes,  used for login in ther data, cannot modify 

-- to enforce date rules
-- validate data 
-- to maintain aduit laws
-- to prevent invalid innvention
-- to apply bussiness rules


-- new key word insert,updare
-- old key word delete, insert


-- use 2pmclass_db

-- Delimiter $$

-- create trigger trigger_name
-- before insert on table_name
-- for each row 
-- begin
-- end $$

-- Delimiter ;


-- Delimiter $$
-- create trigger before_salary_insert
-- before insert on employees
-- for each row
-- begin
-- if new.salary <= 0 then
-- set new.salary = 600 ;
-- end if;
-- end $$
-- Delimiter ;

-- insert into employees (emp_name,email,phone,salary,hire_date,dept_id)
-- values
-- ('leo','das@com','02939375',0,'2022-01-10',5)



-- CREATE TABLE salary_audit (
--     audit_id INT AUTO_INCREMENT PRIMARY KEY,
--     emp_id INT,
--     old_salary DECIMAL(10,2),
--     new_salary DECIMAL(10,2),
--     changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- DELIMITER $$

-- CREATE TRIGGER track_salary_change
-- BEFORE UPDATE ON employees
-- FOR EACH ROW
-- BEGIN
--     -- check if salary changed
--     IF OLD.salary <> NEW.salary THEN
--     
--         INSERT INTO salary_audit(emp_id, old_salary, new_salary)
--         VALUES (OLD.emp_id, OLD.salary, NEW.salary);
--         
--     END IF;
--     
-- END $$

-- DELIMITER ;

UPDATE employees
SET salary = 60000
WHERE emp_id = 1;  

INSERT INTO salary_audit(emp_id, old_salary, new_salary)
VALUES
(2, 35000, 50000),
(3, 40000, 42000),
(1, 45000, 47000);




-- show triggers;