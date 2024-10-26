-- setup.sql

CREATE DATABASE "KChat"
    WITH
    OWNER = secretadmin
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- create_users_table.sql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,           
    name VARCHAR(50) NOT NULL,      
    surname VARCHAR(50) NOT NULL,   
    username VARCHAR(50) UNIQUE NOT NULL, 
    email VARCHAR(100) UNIQUE NOT NULL,  
    password TEXT NOT NULL,      
    gender VARCHAR(10),           
    country VARCHAR(50)        
);