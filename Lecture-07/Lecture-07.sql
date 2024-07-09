create database Shop;

show databases;
use Shop;

drop  table client_master;
create table CLIENT_MASTER (
     ClienbtNo varchar(6) primary key,
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

select * from CLIENT_MASTER;

drop table  PRODUCT_MASTER;

create table PRODUCT_MASTER (

     ProductNo varchar(6) primary key,
     Description varchar(15) NOT NULL,
     Profitpercent int(4) NOT NULL,
     Unitmesure varchar(10) NOT NULL,
     Qtyonhand int(8) NOT NULL,
     Reorderlve int(8) NOT NULL,
     SellPrice int(8) NOT NULL,
     CostPrice int(8) NOT NULL
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

SELECT * FROM PRODUCT_MASTER;

create table SALESMAN_MASTER (
    salesmanno varchar(6)  primary key,
    salesmanName varchar(15) NOT NULL,
    Address1 varchar(4) NOT NULL,
    Address2 varchar(10),
    City varchar(8),
    Pincode int(8),
    state varchar(20),
    Salamt int(8) NOT NULL,
    Tgttoget int(6) NOT NULL,
    Ytdsales int(6) NOT NULL,
    remarks varchar(60) NOT NULL
    );
    
    insert into SALESMAN_MASTER  values 
('S00001','Aman','a/14','worli','Mumbai',400002,'Maharashtra',30000,100,50,'Good'),
('S00002','Omkar','65','Nariman','Mumbai',400001,'Maharashtra',3000,200,100,'Good'),
('S00003','Raj','p-7','Bandra','Mumbai',400032,'Maharashtra',3000,200,100,'Good'),
('S00004','Ashish','A/5','Juhu','Mumbai',400044,'Maharashtra',3500,200,150,'Good');

    select * from SALESMAN_MASTER;
    
    
    CREATE TABLE SALES_ORDER (
	ORDERNO varchar(6) primary key,
	clientnumber varchar(6),
    orderddate Date not null,
    delyaddr varchar(25),
    salesmannumber varchar(6) ,
    delytype char(1),
    billyn char(1),
    delydate date,
    orderstatus varchar(10),
	FOREIGN  KEY (clientnumber) REFERENCES client_master(ClienbtNo),
    FOREIGN KEY (salesmannumber) REFERENCES SALESMAN_MASTER(salesmanno)
 );
 
 insert into SALES_ORDER (ORDERNO, clientnumber, orderddate, delyaddr, salesmannumber, delytype, billyn, delydate, orderstatus) values 
('O19001', 'C00001' , '2004-06-12','Address 1','S00001' , 'F' , 'N','2004-06-20' , 'In Process'),
('O19002', 'C00002' ,'2004-06-25','Address 2','S00002' , 'P' , 'N','2004-06-27' , 'Cancelled'),
('O46865', 'C00003', '2004-02-18', 'Address 3','S00003' , 'F' , 'Y','2004-02-20' , 'Fulfiled'),
('O19003', 'C00001' , '2004-04-03','Address 4','S00001' , 'F' , 'N','2004-04-07' , 'Fulfiled'),
('O46866', 'C00004', '2004-05-20', 'Address 5','S00002' , 'P' , 'N','2004-05-22' , 'cancelled'),
('O19008', 'C00005' , '2004-05-24','Address 6','S00004' , 'F' , 'N','2004-07-26' , 'In Process');

select * from SALES_ORDER;

drop  table sales_order_details;
create table SALES_ORDER_DETAILS (
ORDER_ID varchar(6) ,
PRODUCT_ID varchar(6),
QUANTITY int ,
DISCOUNT int,
AMOUNT int,
FOREIGN  KEY (ORDER_ID) REFERENCES client_master(ClienbtNo),
FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCT_MASTER(ProductNo)
);

	INSERT INTO SALES_ORDER_DETAILS (ORDER_ID, PRODUCT_ID, QUANTITY, DISCOUNT, AMOUNT) VALUES 
('O19001', 'P00001', 4, 4, 525),
('O19001', 'P07965', 2, 1, 8400),
('O19001', 'P07885', 2, 1, 5250),
('O19002', 'P00001', 10, 0, 525),
('O46865', 'P07868', 3, 3, 3150),
('O46865', 'P07885', 3, 1, 5250),
('O46865', 'P00001', 10, 10, 525),
('O46865', 'P0345', 4, 4, 1050),
('O19003', 'P00001', 2, 2, 1050),
('O19003', 'P06734', 1, 1, 12000),
('O46766', 'P07965', 1, 0, 8400),
('O46866', 'P07975', 1, 0, 1050),
('O19008', 'P00001', 10, 5, 525),
('O19008', 'P07975', 5, 3, 1050);


select * from SALES_ORDER_DETAILS;
