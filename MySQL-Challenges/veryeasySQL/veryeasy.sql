DROP DATABASE IF EXISTS guidedInquiry;
CREATE DATABASE guidedInquiry;
USE guidedInquiry;

CREATE TABLE cars(
	make VARCHAR(50),
    model VARCHAR(50),
    year INT 
);

INSERT INTO cars(make, model, year)
VALUES ("Honda", "Civic Type R", 2001),
("Honda", "Integra Type R", 2000),
("Honda", "NSX", 2001);

-- Add Two Cars to the Cars Table
INSERT INTO cars(make, model, year)
VALUES ("Chevrolet", "Corvette ZR1", 2018),
("Lamborghini", "Diablo SV", 1997);

SELECT * FROM cars;