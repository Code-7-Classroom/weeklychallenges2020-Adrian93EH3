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

SELECT * FROM movies WHERE title LIKE '%s%' ORDER BY release_date;