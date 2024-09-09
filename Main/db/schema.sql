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

DO $$
    DECLARE
    -- IF WE NEED TO DECLARE ANY VARIABLES, THEY WILL BE LISTED HERE
    
    BEGIN -- START OF TRANSACTION

    INSERT INTO cows (color, origin, coat, average_weight, purpose)
    VALUES


    INSERT INTO users (id, username, email, hashed_password, consecutive_correct_answers)
    VALUES

    RAISE NOTICE 'Transaction Complete!';

    EXCEPTION -- IN CASE OF ERROR
        WHEN OTHERS THEN
            RAISE NOTICE 'An error has occurred!: %' SQLERRM; -- LOGS THE ERROR
            ROLLBACK; --ROLLS BACK ALL CHANGES MADE IN CASE OF ERROR
    END $$;-- SIGNIFIES END OF THE TRANSACTION