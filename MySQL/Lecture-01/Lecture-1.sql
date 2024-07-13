=> connect mysql

\sql

\connect root@localhost:3306

=> show all databses command:
show databases;

=> create database command;
create database <databasename>;
=> use perticular database command;
use <databasename>;
=> show perticular database tables;
show tables;

=> create new table
create table user(

firstname varchar(30),

lastname varchar(30),

email varchar(50),

gender varchar(10),

mobileNo int

);

=> describe or show perticular table (row and column)
desc user;
describe user;
