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


-- create_notifications_table.sql

CREATE TABLE notifications(
	notifID UUID PRIMARY KEY,
	type VARCHAR(50) NOT NULL,
	title TEXT NOT NULL,
	content TEXT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	from_username VARCHAR(50) NOT NULL,
	to_username VARCHAR(50) NOT NULL
 );


-- create_user_notification_table.sql 

CREATE TABLE user_notification(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    notifID UUID NOT NULL,  
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (notifID) REFERENCES notifications(notifID) ON DELETE CASCADE
);


-- create_friend_requests_table.sql 

CREATE TABLE friend_requests (
    id SERIAL PRIMARY KEY,
    from_username VARCHAR(50) NOT NULL,
    to_username VARCHAR(50) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('ADD FRIEND', 'REQUESTED...', 'FRIEND :)')) DEFAULT 'ADD FRIEND',
    CONSTRAINT fk_from_user FOREIGN KEY (from_username) REFERENCES users(username) ON DELETE CASCADE,
    CONSTRAINT fk_to_user FOREIGN KEY (to_username) REFERENCES users(username) ON DELETE CASCADE
);


-- create_friends_table.sql 

CREATE TABLE friends (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    friendusername VARCHAR(50) NOT NULL,
    CONSTRAINT unique_friendship UNIQUE (username, friendusername)
);






