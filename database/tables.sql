-- Active: 1699840128730@@localhost@5432@postgres


create table tbl_users
(
    user_name varchar(30) PRIMARY key,
    email VARCHAR(70) UNIQUE, 
    pass VARCHAR(30),
    is_active BOOLEAN DEFAULT true, 
    created_date TIMESTAMP DEFAULT current_timestamp, 
    deleted_date TIMESTAMP, 
    update_date TIMESTAMP
);
INSERT INTO tbl_users (user_name, email, pass, is_active, created_date) 
VALUES ('elvin', 'godoy_gmail.com', '1234', true, current_timestamp);

select * from tbl_users;
{
 "user_name": "elvin",
 "email": "godoy_gmail.com", 
 "pass": "1234", 0
 "is_active": "true",
 "created_date": "current_timestamp"
 }

create table tbl_example 
(
    id serial primary key, 
    data_example varchar(200),
    user_name varchar(500)
);



select * from tbl_post;
create table tbl_post 
(   
    id SERIAL PRIMARY key,
    description varchar(200),
    img bytea,
    create_date TIMESTAMP default current_timestamp,
    user_name varchar(30) REFERENCES tbl_users (user_name) 
);