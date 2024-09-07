CREATE DATABASE flashcard_db;
-- CREATING THE DATABASE FOR COWS AND USERS --
\c flashcard_db;
-- CONNECTING TO THE DB --

-- CREATING COW TABLE IN FLASHCARD DB --
CREATE TABLE cows (
    color VARCHAR(100) NOT NULL,
    origin VARCHAR(100) NOT NULL,
    coat VARCHAR(100) NOT NULL,
    average_weight INTEGER NOT NULL,
    purpose VARCHAR(200) NOT NULL
);

-- CREATING USER TABLE IN FLASHCARD DB --
CREATE TABLE users (
    id SERIAL,
    username VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    hashed_password VARCHAR(100) NOT NULL,
    consecutive_correct_answers INTEGER DEFAULT 0
);