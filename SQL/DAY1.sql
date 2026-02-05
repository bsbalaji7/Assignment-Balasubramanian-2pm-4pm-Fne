-- create database 2pmbatch;



-- create table table_name(
-- coloumn datatype,
-- coloumn datatype
-- )

use 2pmbatch;

create table students(
 id int primary key,
 name varchar(50) not null,
 age int check( age >= 18),
 email varchar(100) unique,
 status varchar(20) default "active"
 );
 
 
 insert into students (name , age , email)
 values(

--  3,"Mukesh",99,"mukesh@99.com"
"sathya",29,"sathiya@.com"
 );
 
alter table students add phone varchar (20) ;
 
alter table students
modify id int auto_increment ;

update students
set phone = 9988776655
where id = 1;

select * from students
