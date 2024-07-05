--use classicmodels;

--show tables;

--select * from orderdetails;

-- 1. fetch & display employes details;
select * from employees;

-- 2 Fetch & display employee details for the employees having job Title='Sales Rep' and Employee number between 1200 and 1500

select * from employees where jobtitle = "sales Rep" and employeeNumber between 1200 and 1500;

-- 3 Fetch & display employee details for the employees having office code 2 or more than 2 and job title is not Sales Rep
select * from employees where officecode > 2 and jobtitle != "sales rep"; 

-- 4 Fetch & display customers details(Customers table) who does not belongs to USA

select * from customers;
select * from customers where country != "USA";

-- 5 Fetch & display customers details(Customers table)  having customer number not in the range 150 to 200

select * from customers where customername not between 150 and 200;

-- 6 List out last name, first name for all employees and rename  last name as “Name of the employee”, display as sorting order of their last name


select concat(lastname , "", firstname) as Name_of_the_employee from employees order by lastname asc;

-- 7. List out the customers having credit limit is more than 70000 display in descending order by their last name.

-- Not Understand (doute)
select * from customers order by creditlimit > 70000 or contactlastname desc;

-- 8. List out all customers belongs to city Singapore, Liverpool or NYC

select * from customers where country in ("Singapore" , "Liverpool","NYC");

-- 9 List the details about customer first name “SMITH”

  select contactFirstName from customers where contactFirstName like "smith";

-- 10 List out the employees who are working in office code 1, 3 , 5

	 select * from employees where officecode in (1,2,3);

-- 11. List out the customer having credit limit between 50000 and 95000

	select * from customers where creditlimit between 50000 and 95000;

-- 12. List out the employees who are not working in office code 1 , 3

	select * from employees where officecode not between 1 and 3;
    
    -- 13. List out the customers whose first name starts with “S”
    
		select * from customers where contactfirstname like "S%";
        
-- 14. List out the customers whose name start with “S” and end with “H”
select * from customers where contactfirstname like "S%H";

-- 15. List out the customers whose first name length is 5 and start with “S”

-- dout
select * from customers where contactfirstname like "S____";

-- 16. List out the customers whose first name length is exactly 8

-- dout
select * from customers where contactfirstname like "_________";
    
 -- 17. List out the customers whose first name starting with a and ending with e   
 
 select * from customers where contactfirstname like "a%e";
 
-- 18. List out the customers whose first name contains ee
 
	select * from customers where contactfirstname like "ee%";
    
    -- 19. Show Count of employees who are working in different office in the organization
    
		select officecode, count(officecode) from employees group by officecode;
        
        -- 20. List out the maximum credit limit of customers belongs to different states
			select state,max(creditlimit) as creditlimit from customers group by state; 
	
-- group by
select  orderLineNumber from orderdetails group by orderLineNumber order by orderLineNumber;
select  officeCode from employees group by officeCode order by officeCode;



