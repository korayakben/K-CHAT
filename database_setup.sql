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


-- create_conversations_table.sql

CREATE TABLE conversations (
    id SERIAL PRIMARY KEY,
    user1_id INT NOT NULL,       
    user2_id INT NOT NULL,        
    created_at TIMESTAMP DEFAULT NOW(), 
    UNIQUE (user1_id, user2_id)    
);


-- create_messages_table.sql

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,         
    conversation_id INT NOT NULL REFERENCES conversations(id) ON DELETE CASCADE, 
    sender_id INT NOT NULL,      
    content TEXT NOT NULL,        
    timestamp TIMESTAMP DEFAULT NOW()
);

