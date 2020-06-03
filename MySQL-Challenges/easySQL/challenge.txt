DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

-- Creates the books table
CREATE TABLE books(
	title VARCHAR(255),
    publish_date DATE,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

INSERT INTO books(title, publish_date, first_name, last_name)
VALUES("Ruined: A Novel", "2010-02-01", "Paula", "Morris"),
("Unbroken: A Ruined Novel", "2013-02-01", "Paula", "Morris"),
("The Maze Runner", "2009-10-06", "James", "Dashner"),
("The Maze Runner: The Scorch Trials", "2010-09-18", "James", "Dashner"),
("The Maze Runner: The Death Cure", "2011-10-11", "James", "Dashner");

-- Inserts two books into the books table
INSERT INTO books(title, publish_date, first_name, last_name)
VALUES("The Maze Runner: The Kill Order", "2012-08-14", "James", "Dashner"),
("The Maze Runner: The Fever Code", "2016-09-27", "James", "Dashner");

-- Delete the oldest book by publish date
DELETE FROM books ORDER BY publish_date LIMIT 1;

SELECT * FROM books;

-- Counts the number of Books in the table by book title
SELECT COUNT(title) FROM books;