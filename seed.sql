DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

create table department(
	id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) not null
);

create table role(
	id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(30) not null,
    salary DECIMAL(10,2) not null,
    department_id int
);

create table employee(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    role_id int,
    manger_id int
    
);