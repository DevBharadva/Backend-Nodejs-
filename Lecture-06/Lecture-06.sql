
-- Numberic Function

select ABS (	10.3);
select round (1234.343456 , 12);
select power (10,2);
select sin (1);
select COS (1);
select truncate(103.3223, );
select tan(4);
select ASIN(0.10);
select acos (0.2);
select Atan (3.2); 

select radians(180);
select degrees(pi());
select ATAN (2.2);

SELECT LOG10(10000); 
SELECT LOG2(16);

select log(3,243); 

-- not run / (use)
select tanh(10,10);

select SQRT(40000);

SELECT exp(1);

SELECT LN(3);

SELECT CEIL(1.3);
SELECT CEIL(-1.3);

SELECT FLOOR(2.4);
SELECT FLOOR(-2.3);

SELECT SIGN(0);
SELECT SIGN(1);
SELECT SIGN(-4);


-- string function

-- not use
select initcap("Dev Bharadva");

select LOWER ("DEV");

select upper("dev");

select concat('Dev', 'Bharadva');

select lpad('ABC' , 8 , 'XY');
select lpad('123' , 5 , '0');

select rpad('123',8 , '3');
select rpad('abc' , 7, 'de');

select ltrim("HELLO  ");

SELECT rtrim("DEV BHARADVA    ");

SELECT replace('Lion is very powerfull and lapad is very fast run' , 'Lion' , 'lapad');

select substr("Dev Bharadva " , '1');

select length("BHaradva");

-- not use
select inert("Devloper.com ", 1,7,"Bharadva");


-- string / Number conversion functions

select NANVl(10 / 0 , 0);

select TO_CHAR ();

select TO_NUMBER ( );

-- group functions

 





