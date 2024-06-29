--\sql
--\connect root@localhost:3306
--show databases;

--show tables;

-- CLIENT MASTER TABLE

create table CLIENT_MASTER (
     ClienbtNo varchar(6),
    Name varchar(20),
    Address1 varchar(30),
    Address2 varchar(30),
    City varchar(15),
    PinCode int(8),
    State varchar(15),
    Baldue int(10)
);
insert into CLIENT_MASTER  
values 
('C00001','Lvan Bayross','a/14','worli','Mumbai',400054,'Maharashtra',15000),
('C00002','Mamta Muzundar','65','Nariman','Madras',780001,'TamilNadu',0),
('C00003','Chhaya Bankar','p-7','Bandra','Mumbai',400057,'Maharashtra',5000),
('C00004','Ashvin Joshi','a/5','Juhu','Mumbai',55001,'Karnataka',0),
('C00005','Hansel Colaco','A-20','Chopati','Mumbai',400060,'Maharashtra',2000),
('C00006','Deepak Sharma','D-3','Marina','Surat',560056,'Karnataka',0);

--FILTER DATA 
--Find out All Client Names

select * from CLIENT_MASTER where Name;


-- PRODUCT_MASTER TABLE

create table PRODUCT_MASTER (
     ProductNo varchar(6),
     Description varchar(15),
     Profitpercent int(4),
     Unitmesure varchar(10),
     Qtyonhand int(8),
     Reorderlve int(8),
     SellPrice int(8),
     CostPrice int(8)
);

insert into PRODUCT_MASTER 
values 
('P00001','t-sHIRTS',5,'peice', 200 , 50 , 350 , 200),
('P0345','Shirt',6,'Peice',150,50,500,350),
('P06734','Cotton Jeans',5,'peice',100,20,600,450),
('P07865','Jeans',5,'peice', 100, 20, 750, 500),
('P07868','Trousers',2,'peice',150 ,50,850,550),
('P07885','Pull Overs',2.5,'peice',80 ,30,700,450),
('P07965','Denim Shirts',4,'peice',100 ,40, 350,250),
('P07975','Lycra Tops',5,'peice',70 ,30, 300,175),
('P08865','Skirts',5,'peice',75 ,30, 450,300);


-- SALESMAN_MASTER TABLE

create table SALESMAN_MASTER (
    
    salesmanno varchar(6),
    salesmanName varchar(15),
    Address1 varchar(4),
    Address2 varchar(10),
    City varchar(8),
    Pincode int(8),
    state varchar(20),
    Salamt int(8),
    Tgttoget int(6),
    Ytdsales int(6),
    remarks varchar(60)
    );

    insert into SALESMAN_MASTER  values 
('S00001','Aman','a/14','worli','Mumbai',400002,'Maharashtra',30000,100,50,'Good'),
('S00002','Omkar','65','Nariman','Mumbai',400001,'Maharashtra',3000,200,100,'Good'),
('S00003','Raj','p-7','Bandra','Mumbai',400032,'Maharashtra',3000,200,100,'Good'),
('S00004','Ashish','A/5','Juhu','Mumbai',400044,'Maharashtra',3500,200,150,'Good');

--update syntax
update product_master set Address1 = int where Address1 = varchar;


select * from CLIENT_MASTER;
select * from PRODUCT_MASTER;
select * from SALESMAN_MASTER;