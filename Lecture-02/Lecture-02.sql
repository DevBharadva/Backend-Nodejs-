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
select firstname , age from user;
select firstname from users;
select firstname as "FullName" , age from users;
select firstname "Names" , age from users;
select * age from users;
select concat(firstname, " " , lastname) as "FullName" , age from users
