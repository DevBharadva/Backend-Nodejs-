-- create database Shop;

create table CLIENT_MASTER (
    Address2 varchar(30),
    city varchar (15),
    PinCode int primary key,
    state varchar(15),
    baldue int
);

insert into CLIENT_MASTER values 
    ('a/14','Mumbai',400054,'Maharashtra',15000),
    ('65','Madras',780001,'TamilNadu',54500),
    ('p-7','Mumbai',400057,'Maharashtra',5000),
    ('a/5','Mumbai',55001,'Karnataka',34360),
    ('A-20','Mumbai',400060,'Maharashtra',2000),
    ('D-3','Surat',560056,'Karnataka',34320),
    ('1105','Surat',560056,'gujarat',34320),
    ('f-4','Surat',494107,'gujarat',235420),
    ('soc-2','Vadodra',560056,'gujarat',34320),
    ('D-3','Surat',560056,'Karnataka',34320),
    ('D-3','Surat',560056,'Karnataka',34320);

