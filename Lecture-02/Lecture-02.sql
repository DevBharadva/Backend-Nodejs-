--\sql
--\connect root@localhost:3306
--show databases;


--show tables;

create table user (
    id int,
    firstname varchar(30),
    lastname varchar(20),
    salary int
);

--desc user
--desribe user

--insert data
insert into user (id , firstname, lastname) values (1,"mukesh" , "Ambani")

--Multiple data
insert into user (id , firstname, lastname) values 
(1,"mukesh" , "Ambani"),
(2,"gautam" , "Adani"),
(3,"Narea" , "Modi"),
(4,"Dev" , "Bharadva");



--read data
select * from user
