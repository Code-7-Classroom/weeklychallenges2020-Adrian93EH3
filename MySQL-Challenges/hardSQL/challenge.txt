DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

CREATE TABLE movies(
	title VARCHAR(255), 
    release_date DATE, 
    rating ENUM('G','PG','PG13','R','MA')
);

INSERT INTO movies(title, release_date, rating)
VALUES("The Shining", "1980-05-23", "R"),
("Inception", "2010-07-13", "PG13"),
("John Wick 2", "2017-02-10", "R"),
("The Collector", "2009-07-13", "R"),
("John Wick 3", "2019-05-17", "R"),
("The Collection", "2012-11-30", "R"),
("Unstoppable", "2010-11-12", "PG-13"),
("The Other Guys", "2010-08-05", "PG13"),
("John Wick", "2014-10-24", "R"),
("Split", "2017-01-19", "PG13");

-- Adds First and Last name Column
ALTER TABLE movies
ADD (first_name VARCHAR(255), last_name VARCHAR(255));

-- Updates movies Table with First and Last Name data
UPDATE movies
SET first_name = "Stanley", last_name = "Kubrick"
WHERE title = "The Shining";

UPDATE movies
SET first_name = "Christopher", last_name = "Nolan"
WHERE title = "Inception";

UPDATE movies
SET first_name = "Chad", last_name = "Stahelski"
WHERE title = "John Wick 2";

UPDATE movies
SET first_name = "Marcus", last_name = "Dunstan"
WHERE title = "The Collector";

UPDATE movies
SET first_name = "Chad", last_name = "Stahelski"
WHERE title = "John Wick 3";

UPDATE movies
SET first_name = "Marcus", last_name = "Dunstan"
WHERE title = "The Collection";

UPDATE movies
SET first_name = "Tony", last_name = "Scott"
WHERE title = "Unstoppable";

UPDATE movies
SET first_name = "Adam", last_name = "McKay"
WHERE title = "The Other Guys";

UPDATE movies
SET first_name = "Chad", last_name = "Stahelski"
WHERE title = "John Wick";

UPDATE movies
SET first_name = "M. Knight", last_name = "Shyamalan"
WHERE title = "Split";

-- Adds first and last name into single data column
SELECT CONCAT(first_name, ' ', last_name) AS 'full_name' FROM movies;

-- Puts table data in alphabetical order by last name
SELECT * FROM movies ORDER BY last_name;

-- Deletes Movies where the director's last name ends with character between R and Z
DELETE FROM movies WHERE last_name REGEXP '[R-Z]$';
SELECT * FROM movies;

-- Displays first three rows of movies table
SELECT * FROM movies LIMIT 3;